import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-profile-modal-account',
  templateUrl: './profile-modal-account.component.html',
  styleUrls: ['./profile-modal-account.component.scss']
})
export class ProfileModalAccountComponent implements OnInit {

  @Input() accountData: any;

  accountForm = new FormGroup({
    firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      email: new FormControl('', []),
      role: new FormControl('', [])
  });
  selectedRole = new FormControl();
  accountRoles: any;

  constructor(protected ref: NbDialogRef<ProfileModalAccountComponent>) { }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

  ngOnInit(): void {
    this.accountRoles = this.accountData.roles;
    this.setFormValues(this.accountData);
  }

  setFormValues(accountData){
    let accRole = '';
    this.accountForm.controls['firstName'].setValue(accountData.firstName);
    this.accountForm.controls['lastName'].setValue(accountData.lastName);
    this.accountForm.controls['email'].setValue(accountData.identity);
    this.accountData.roles.forEach((rol:any, index: number)=> {
      if(index === this.accountData.roles.length - 1) {
        accRole = accRole+ '  '+rol.name;
      } else {
        accRole = rol.name;
      }
    });
    this.selectedRole.setValue(accRole);
  }

}
