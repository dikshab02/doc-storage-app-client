import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  signupForm: FormGroup | undefined;
  constructor(
    private router: Router,
    private httpCallService: HttpCallService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      },
      { validator: null }
    );
  }

  signup() {
    const credentials = {
      username: this.username,
      password: this.password,
    };

    this.httpCallService.signup(credentials).subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
