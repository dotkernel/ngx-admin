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
  newAdminObservable: Subscription;

  constructor(protected ref: NbDialogRef<CreateNewAdminModalComponent>,
    private data: DataManipulationService,
    private adminService: AdminsService,
    private formBuilder: FormBuilder,
    private adminDataService: AdminsService) {
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

      this.newAdminObservable = this.adminDataService.createNewAdmin(adminValues).subscribe((res) => {
        this.data.showToast('success','Success!', 'Admin has been added.');
        this.ref.close(true);
      }, (err) => {
        this.data.showToast('danger', 'Error!', err);
        if(err.firstName?.isEmpty != null){
          this.data.showToast('warning', 'First name inputfield error!', err.firstName?.isEmpty);
        }
        if(err.lastName?.isEmpty != null){
          this.data.showToast('warning', 'Last name inputfield error!', err.lastName?.isEmpty);
        }
        if(err.identity?.isEmpty != null){
          this.data.showToast('warning', 'Email inputfield error!', err.identity?.isEmpty);
        }
        if(err.roles[0]?.isEmpty != null){
          this.data.showToast('warning', 'Roles inputfield error!', err.roles[0]?.isEmpty);
        }
        if(err.password?.stringLengthTooShort != null){
          this.data.showToast('warning', 'Password inputfield error!', err.password?.stringLengthTooShort);
        }
        if(err.passwordConfirm?.isEmpty != null){
          this.data.showToast('warning', 'Confirm password inputfield error!', err.passwordConfirm?.isEmpty);
        }
      });

    } else {
      this.data.showToast('warning', 'The form is invalid!', '');
    }

  }

  ngOnInit(): void {
    this.getAdminRoles();
  }

  ngOnDestroy(): void {
    this.adminRolesObservable.unsubscribe();
    this.newAdminObservable?.unsubscribe();
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
