import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { DataManipulationService } from '../../../../services/data-manipulation.service';
import { UserServiceService } from '../../user-service/user-service.service';

@Component({
  selector: 'ngx-create-new-user-modal',
  templateUrl: './create-new-user-modal.component.html',
  styleUrls: ['./create-new-user-modal.component.scss']
})
export class CreateNewUserModalComponent implements OnInit, OnDestroy {

  showPassword: boolean;
  newUserForm: FormGroup;

  selectedRole = new FormControl();
  userRoles: any;
  checkedRoles = [];

  adminRolesObservable: Subscription;
  newUserObservable: Subscription;

  constructor(protected ref: NbDialogRef<CreateNewUserModalComponent>,
    private data: DataManipulationService,
    private userService: UserServiceService,
    private formBuilder: FormBuilder,
    private userDataService: UserServiceService) {
      this.newUserForm = this.formBuilder.group({
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
        identity: this.newUserForm.value.email,
        password: this.newUserForm.value.password,
        passwordConfirm: this.newUserForm.value.confirmPassword,
        status: 'pending',
        detail: {
          firstName: this.newUserForm.value.firstName,
          lastName: this.newUserForm.value.lastName,
          email: this.newUserForm.value.email
        },
        roles: roleUuids
      }
      this.newUserObservable = this.userDataService.createNewUser(userValues).subscribe((res) => {
        this.data.showToast('success', 'Success!', 'User has been added.');
        this.ref.close(true);
      }, (err) => {
        this.data.showToast('danger', 'Error!', err);
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
    } else {
      this.data.showToast('warning', 'The form is invalid!', '');
    }
  }

  ngOnInit(): void {
    this.getUsersRoles();
  }

  ngOnDestroy(): void {
    this.adminRolesObservable.unsubscribe();
    this.newUserObservable?.unsubscribe();
  }

  getUsersRoles() {
    this.adminRolesObservable = this.userService.getUsersRoles().subscribe((res) => {
      const userList = res['_embedded'].roles;
      this.userRoles = userList;
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

  setUserRole(event: any, roleName) {
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
