import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManipulationService } from '../../../services/data-manipulation.service';
import { MustMatch } from '../../helpers';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

}
