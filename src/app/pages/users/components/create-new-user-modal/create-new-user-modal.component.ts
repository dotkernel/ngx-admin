import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { DataManipulationService } from '../../../../services/data-manipulation.service';
import { UserServiceService } from '../../user-service/user-service.service';

@Component({
  selector: 'ngx-create-new-user-modal',
  templateUrl: './create-new-user-modal.component.html',
  styleUrls: ['./create-new-user-modal.component.scss']
})
export class CreateNewUserModalComponent implements OnInit, OnDestroy {

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
  adminRolesObservable: Subscription;

  constructor(protected ref: NbDialogRef<CreateNewUserModalComponent>, 
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
        identity: this.newUserForm.value.email,
        password: this.newUserForm.value.password,
        passwordConfirm: this.newUserForm.value.confirmPassword,
        status: 'pending',
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
  }

  ngOnDestroy(): void {
    this.adminRolesObservable.unsubscribe();
  }

  getUsersRoles() {
    this.adminRolesObservable = this.userService.getUsersRoles().subscribe((res) => {
      const userList = res['_embedded'].roles;
      this.userRoles = userList;
      this.selectedRole.setValue(this.userRoles[0].name);
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
