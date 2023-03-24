import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { DataManipulationService } from '../../../../services/data-manipulation.service';
import { AdminsService } from '../../admin-service/admins.service';

@Component({
  selector: 'ngx-create-new-admin-modal',
  templateUrl: './create-new-admin-modal.component.html',
  styleUrls: ['./create-new-admin-modal.component.scss']
})
export class CreateNewAdminModalComponent implements OnInit, OnDestroy {

  showPassword: boolean;
  newAdminForm: FormGroup;

  selectedRole = new FormControl();
  adminRoles: any;
  checkedRoles = [];
  adminRolesObservable: Subscription;

  constructor(protected ref: NbDialogRef<CreateNewAdminModalComponent>, 
    private data: DataManipulationService,
    private adminService: AdminsService,
    private formBuilder: FormBuilder) {
      this.newAdminForm = this.formBuilder.group({
        firstName: new FormControl('', [
          Validators.required]),
          lastName: new FormControl('', [
          Validators.required]),
          email: new FormControl('', [
            Validators.required, Validators.email]),
          role: new FormControl('', []),
          password: new FormControl('', [
            Validators.required, Validators.minLength(6)]),
          confirmPassword: new FormControl('', [
            Validators.required]),
      }, {validator: MustMatch('password','confirmPassword')});
    }
 

  cancel() {
    this.ref.close();
  }

  onSubmit(event: any) {
    if(this.newAdminForm.valid) {
      let roleUuids = [];
      this.adminRoles.forEach((el) => {
        this.checkedRoles.forEach((role) => {
          if(el.name === role) {
            roleUuids.push({uuid : el.uuid});
          }
        });
      });
      const adminValues = {
        identity: this.newAdminForm.value.email,
        password: this.newAdminForm.value.password,
        passwordConfirm: this.newAdminForm.value.confirmPassword,
        firstName: this.newAdminForm.value.firstName,
        lastName: this.newAdminForm.value.lastName,
        roles: roleUuids
      }
      this.ref.close(adminValues);
    } else {
      this.data.showToast('warning', 'The form is invalid!', '');
    }
    
  }

  ngOnInit(): void {
    this.getAdminRoles();
  }

  ngOnDestroy(): void {
    this.adminRolesObservable.unsubscribe();
  }

  getAdminRoles() {
    this.adminRolesObservable = this.adminService.getAdminRoles().subscribe((res) => {
      const adminList = res['_embedded'].roles;
      this.adminRoles = adminList;
    });
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  setAdminRole(event: any, roleName) {
    if(event) {
      this.checkedRoles.push(roleName);
    } else {
      if(this.checkedRoles.length) {
        this.checkedRoles.forEach((el, index)=> {
          if(el === roleName) {
            this.checkedRoles.splice(index, 1);
          }
        });
      }
    }
  }
}
