import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  color: string = 'green';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpCallService: HttpCallService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.httpCallService.login(this.loginForm?.value).subscribe((response) => {
      localStorage.setItem('LOGIN_USER', JSON.stringify(response.data));
      if (!this.loginForm?.valid) return;
      // if (this.authService.isAdminCheck())
        this.router.navigate(['home']);
      // else this.router.navigate(['add-project']);
    });
  }
}
