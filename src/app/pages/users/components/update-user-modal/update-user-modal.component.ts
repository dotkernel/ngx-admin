import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { DataManipulationService } from '../../../../services/data-manipulation.service';
import { UserServiceService } from '../../user-service/user-service.service';

@Component({
  selector: 'ngx-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss']
})
export class UpdateUserModalComponent implements OnInit, OnDestroy {

  @Input() userData: any;

  showPassword: boolean;
  newUserForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required]),
      lastName: new FormControl('', [
      Validators.required]),
      email: new FormControl('', [
        Validators.required]),
      role: new FormControl('', []),
  });

  userRoles: any;
  userRolesObservable: Subscription;
  checkedRoles = [];
  isRoleChecked:{name:string, show:boolean}[] = [{name: 'guest', show: false},{name: 'user', show: false}];

  constructor(protected ref: NbDialogRef<UpdateUserModalComponent>, 
    private data: DataManipulationService,
    private userService: UserServiceService) { }
 

  cancel() {
    this.ref.close();
  }

  onSubmit(event: any) {
    if(this.newUserForm.valid) {
      let roleUuids = [];
      this.userRoles.forEach((el) => {
        this.checkedRoles.forEach((role) => {
          if(el.name === role) {
            roleUuids.push({uuid : el.uuid});
          }
        });
      });
      const userValues = {
        status: 'active',
        detail: {
          firstName: this.newUserForm.value.firstName,
          lastName: this.newUserForm.value.lastName,
          email: this.newUserForm.value.email
        },
        roles: roleUuids
      }
      this.ref.close(userValues);
    } else {
      this.data.showToast('warning', 'Error', '');
    }
    
  }

  ngOnInit(): void {
    this.getUsersRoles();
    this.setFormValues(this.userData);
  }

  ngOnDestroy(): void {
    this.userRolesObservable.unsubscribe();
  }

  getUsersRoles() {
    this.userRolesObservable = this.userService.getUsersRoles().subscribe((res) => {
      this.userRoles = res['_embedded'].roles;
      this.userData.roles.forEach((el) => {
        if(el.name === 'user') {
          this.isRoleChecked[1].show = true;
        } else {
          this.isRoleChecked[0].show = true;
        }
        this.checkedRoles.push(el.name);
      });
    });
  }

  setFormValues(userData){
    this.newUserForm.controls['firstName'].setValue(userData.detail.firstName);
    this.newUserForm.controls['lastName'].setValue(userData.detail.lastName);
    this.newUserForm.controls['email'].setValue(userData.identity);
  }

  setUserRole(event: any, roleName) {
    if(event) {
      if(this.checkedRoles.length != 0) {
        this.checkedRoles.forEach((el) => {
          if(el === roleName) {
            return;
          } else {
            this.checkedRoles.push(roleName);
          }
        });
      } else {
        this.checkedRoles.push(roleName);
      }
    } else if(this.checkedRoles.length) {
      this.checkedRoles.forEach((el, index)=> {
        if(el === roleName) {
          this.checkedRoles.splice(index, 1);
        }
      });
    }
  }

}
