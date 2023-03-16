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
      password: new FormControl('', [
        Validators.required]),
      confirmPassword: new FormControl('', [
        Validators.required]),
  });

  selectedRole = new FormControl();
  adminRoles: any;
  adminRolesObservable: Subscription;

  constructor(protected ref: NbDialogRef<UpdateAdminModalComponent>,
    private data: DataManipulationService,
    private adminService: AdminsService) { }


  cancel() {
    this.ref.close();
  }

  onSubmit(event: any) {
    if (this.newAdminForm.valid) {
      let roleUuid = '';

      this.adminRoles.forEach((el) => {
        if (el.name === this.selectedRole.value) {
          roleUuid = el.uuid;
        }
      });
      const adminValues = {
        password: this.newAdminForm.value.password,
        passwordConfirm: this.newAdminForm.value.confirmPassword,
        firstName: this.newAdminForm.value.firstName,
        lastName: this.newAdminForm.value.lastName,
        roles: [{uuid: roleUuid}],
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
    this.selectedRole.setValue(adminData.roles[0].name);
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

}
