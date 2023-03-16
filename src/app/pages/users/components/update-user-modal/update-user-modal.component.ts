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
      password: new FormControl('', [
        Validators.required]),
      confirmPassword: new FormControl('', [
        Validators.required]),
  });

  selectedRole = new FormControl();
  userRoles: any;
  userRolesObservable: Subscription;

  constructor(protected ref: NbDialogRef<UpdateUserModalComponent>, 
    private data: DataManipulationService,
    private userService: UserServiceService) { }
 

  cancel() {
    this.ref.close();
  }

  onSubmit(event: any) {
    if(this.newUserForm.valid) {
      let roleUuid = '';

      this.userRoles.forEach((el) => {
        if(el.name === this.selectedRole.value) {
          roleUuid = el.uuid;
        }
      });
      const userValues = {
        password: this.newUserForm.value.password,
        passwordConfirm: this.newUserForm.value.confirmPassword,
        status: 'active',
        detail: {
          firstName: this.newUserForm.value.firstName,
          lastName: this.newUserForm.value.lastName,
          email: this.newUserForm.value.email
        },
        roles: [{uuid: roleUuid}]
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
      const userList = res['_embedded'].roles;
      this.userRoles = userList;
      this.selectedRole.setValue(this.userRoles[0].name);
    });
  }

  setFormValues(userData){
    this.newUserForm.controls['firstName'].setValue(userData.detail.firstName);
    this.newUserForm.controls['lastName'].setValue(userData.detail.lastName);
    this.newUserForm.controls['email'].setValue(userData.identity);
    this.selectedRole.setValue(userData.roles[0].name);
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
