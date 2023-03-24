import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs-compat';
import { DataManipulationService } from '../../services/data-manipulation.service';
import { CreateNewUserModalComponent } from './components/create-new-user-modal/create-new-user-modal.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';
import { UpdateUserModalComponent } from './components/update-user-modal/update-user-modal.component';
import { UserDetailRendererComponent } from './components/user-detail-renderer/user-detail-renderer.component';
import { UserServiceService } from './user-service/user-service.service';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  settings = {
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.userRoles;
          return {value, cell};
        },
        renderComponent: UserDetailRendererComponent,
      },
      lastName: {
        title: 'Last Name',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.userRoles;
          return {value, cell};
        },
        renderComponent: UserDetailRendererComponent,
      },
      identity: {
        title: 'Email',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      roles: {
        title: 'Roles',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.userRoles;
          return {value, cell};
        },
        renderComponent: UserDetailRendererComponent,
      },
      created: {
        title: 'Creation Date',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.userRoles;
          return {value, cell};
        },
        renderComponent: UserDetailRendererComponent,
      },
      updated: {
        title: 'Update Date',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.userRoles;
          return {value, cell};
        },
        renderComponent: UserDetailRendererComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  userRoles: any;
  usersListObservable: Subscription;
  newUserObservable: Subscription;
  updateUserObservable: Subscription;
  deleteUserObservable: Subscription;

  constructor(private userDataService: UserServiceService,
    public data: DataManipulationService,
    private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  ngOnDestroy(): void {
    this.usersListObservable?.unsubscribe();
    this.newUserObservable?.unsubscribe();
    this.updateUserObservable?.unsubscribe();
    this.deleteUserObservable?.unsubscribe();

  }

  getUserList() {
    this.usersListObservable = this.userDataService.getUsersList().subscribe((res) => {
      const usersList = res['_embedded'].users;
      this.userRoles = usersList;
      this.source.load(usersList);
    });
  }

  createNewUser() {
    this.dialogService.open(CreateNewUserModalComponent, {closeOnBackdropClick : false, autoFocus: false}).onClose.subscribe((res) => {
      if(res) {
        console.log(res);
        this.newUserObservable = this.userDataService.createNewUser(res).subscribe((res) => {
          this.data.showToast('success', 'Success!', 'User has been added.');
          this.getUserList();
        }, (err) => {
          console.log(err);
          if(err.detail.email.isEmpty != ''){
            this.data.showToast('warning', 'Email inputfield error!', err.detail.email.isEmpty);
          }
          if(err.password.stringLengthTooShort != ''){
            this.data.showToast('warning', 'Password inputfield error!', err.password.stringLengthTooShort);
          }
          if(err.passwordConfirm.isEmpty != ''){
            this.data.showToast('warning', 'Confirm password inputfield error!', err.passwordConfirm.isEmpty);
          }
        });
      }
    });
  }

  editUser(event){
    const userData = event.data;
    this.dialogService.open(UpdateUserModalComponent, {closeOnBackdropClick : false, autoFocus : false , context: {userData: userData}}).onClose.subscribe((res) => {
      if(res) {
        this.updateUserObservable = this.userDataService.updateUser(res, userData.uuid).subscribe((res) => {
          this.data.showToast('success','Success!', 'User has been updated.');
          this.getUserList();
        }, (err) => {
          this.data.showToast('warning', 'Somthing went wrong', '')
        });
      }
    });
  }

  deleteUser(event) {
    const userData = event.data;
    this.dialogService.open(DeleteUserModalComponent, {closeOnBackdropClick : false, autoFocus : false , context: {userData: userData}}).onClose.subscribe((res) => {
      if(res) {
        this.deleteUserObservable = this.userDataService.deleteUser(userData.uuid).subscribe((res) => {
          this.data.showToast('success', 'User removed.', '');
          this.getUserList();
        }, (err) => {
          this.data.showToast('warning', err, '');
        });
      }
    });
  }

}
