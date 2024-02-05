import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'angular2-smart-table';
import { Observable, Subscription } from 'rxjs';
import { ApiWraperService } from '../../services/api-wraper.service';
import { DataManipulationService } from '../../services/data-manipulation.service';
import { AdminsService } from './admin-service/admins.service';
import { AdminDetailRendererComponent } from './components/admin-detail-renderer/admin-detail-renderer.component';
import { CreateNewAdminModalComponent } from './components/create-new-admin-modal/create-new-admin-modal.component';
import { DeleteAdminModalComponent } from './components/delete-admin-modal/delete-admin-modal.component';
import { UpdateAdminModalComponent } from './components/update-admin-modal/update-admin-modal.component';

@Component({
  selector: 'ngx-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit, OnDestroy {

  settings = {
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus fa-2x"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit fa-2x"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash fa-2x"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
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
          value = this.adminRoles;
          return {value, cell};
        },
        renderComponent: AdminDetailRendererComponent,
      },
      created: {
        title: 'Creation Date',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.adminRoles;
          return {value, cell};
        },
        renderComponent: AdminDetailRendererComponent,
      },
      updated: {
        title: 'Update Date',
        type: 'custom',
        valuePrepareFunction: (value, row, cell) => {
          value = this.adminRoles;
          return {value, cell};
        },
        renderComponent: AdminDetailRendererComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  adminListObservable: Subscription;
  newAdminObservable: Subscription;
  deleteAdminObservable: Subscription;
  updateAdminObservable: Subscription;
  reportErrorObservable: Subscription;
  adminRoles: any;

  constructor(private adminDataService: AdminsService,
              public data: DataManipulationService,
              private dialogService: NbDialogService,
              private apiWraper: ApiWraperService) {}

  ngOnInit(): void {
    this.getAdminList();
  }

  getAdminList() {
    this.adminListObservable = this.adminDataService.getAdminsList().subscribe((res) => {
      const adminList = res['_embedded'].admins;
      this.adminRoles = adminList;
      this.source.load(adminList);
    });
  }

  ngOnDestroy(): void {
    this.adminListObservable?.unsubscribe();
    this.newAdminObservable?.unsubscribe();
    this.updateAdminObservable?.unsubscribe();
    this.deleteAdminObservable?.unsubscribe();
    this.reportErrorObservable?.unsubscribe();
  }

  createNewAdmin() {
    this.dialogService.open(CreateNewAdminModalComponent, {closeOnBackdropClick : false, autoFocus: false}).onClose.subscribe((res) => {
      if(res) {
        this.getAdminList();
      }
    });
  }

  editAdmin(event){
    const adminData = event.data;

    this.dialogService.open(UpdateAdminModalComponent, {closeOnBackdropClick : false, autoFocus : false , context: {adminData: adminData}}).onClose.subscribe((res) => {
      if(res) {
        this.updateAdminObservable = this.adminDataService.updateAdmin(res, adminData.uuid).subscribe((res) => {
          this.data.showToast('success', 'Success!', 'Admin has been updated.');
          this.getAdminList();
        }, (err) => {
          this.data.showToast('warning', 'Something went wrong', '')
        });
      }
    });
  }

  deleteAdmin(event) {
    const adminData = event.data;
    this.dialogService.open(DeleteAdminModalComponent, {closeOnBackdropClick : false, autoFocus : false , context: {adminData: adminData}}).onClose.subscribe((res) => {
      if(res) {
        this.deleteAdminObservable = this.adminDataService.deleteAdmin(adminData.uuid).subscribe((res) => {
          this.data.showToast('success','Success!', 'Admin has been removed.');
          this.getAdminList();
        }, (err) => {
          this.data.showToast('warning', 'Warning', 'Couldnt delete the selected admin.');
        });
      }
    });
  }

}
