import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataManipulationService} from '../../../services/data-manipulation.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private data: DataManipulationService,
  ) {
    // redirect to home if already logged in
    if (this.authService.tokenData) {
      this.router.navigate(['/pages']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      terms: [true, Validators.requiredTrue]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value).subscribe({
      next: res => {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/pages';
        this.router.navigate([this.returnUrl]);
      },
      error: err => {
        this.data.showToast('warning', 'Error to sign in!', '');
        this.loading = false;
      }
    });
  }
}
