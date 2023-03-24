import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { DataManipulationService } from '../../../../services/data-manipulation.service';
import { AdminsService } from '../../admin-service/admins.service';

@Component({
  selector: 'ngx-update-admin-modal',
  templateUrl: './update-admin-modal.component.html',
  styleUrls: ['./update-admin-modal.component.scss'],
})
export class UpdateAdminModalComponent implements OnInit, OnDestroy {

  @Input() adminData: any;

  showPassword: boolean;
  newAdminForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required]),
      lastName: new FormControl('', [
      Validators.required]),
      email: new FormControl('', [
        Validators.required]),
      role: new FormControl('', []),
  });

  adminRoles: any;
  adminRolesObservable: Subscription;
  checkedRoles = [];
  isRoleChecked:{name:string, show:boolean}[] = [{name: 'admin', show: false},{name: 'superuser', show: false}];

  constructor(protected ref: NbDialogRef<UpdateAdminModalComponent>,
    private data: DataManipulationService,
    private adminService: AdminsService) { }


  cancel() {
    this.ref.close();
  }

  onSubmit(event: any) {
    if (this.newAdminForm.valid) {
      let roleUuids = [];
      this.adminRoles.forEach((el) => {
        this.checkedRoles.forEach((role) => {
          if(el.name === role) {
            roleUuids.push({uuid : el.uuid});
          }
        });
      });
      const adminValues = {
        firstName: this.newAdminForm.value.firstName,
        lastName: this.newAdminForm.value.lastName,
        roles: roleUuids,
      };
      this.ref.close(adminValues);
    } else {
      this.data.showToast('warning', 'Error', '');
    }
  }

  ngOnInit(): void {
    this.getAdminRoles();
    this.setFormValues(this.adminData);
  }

  ngOnDestroy(): void {
    this.adminRolesObservable.unsubscribe();
  }

  setFormValues(adminData) {
    this.newAdminForm.controls['firstName'].setValue(adminData.firstName);
    this.newAdminForm.controls['lastName'].setValue(adminData.lastName);
    this.newAdminForm.controls['email'].setValue(adminData.identity);
  }

  getAdminRoles() {
    this.adminRolesObservable = this.adminService.getAdminRoles().subscribe((res) => {
      this.adminRoles = res['_embedded'].roles;
      this.adminData.roles.forEach((el) => {
        if(el.name === 'admin') {
          this.isRoleChecked[0].show = true;
        } else {
          this.isRoleChecked[1].show = true;
        }
        this.checkedRoles.push(el.name);
      });
    });
  }

  setAdminRole(event: any, roleName) {
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
