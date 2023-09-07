import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login.model';
import { HttpCallService } from 'src/app/services/http-call.service';
import { confirmPasswordValidator } from 'src/app/validators/password-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  signupForm: any = FormGroup;
  constructor(
    private router: Router,
    private httpCallService: HttpCallService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        username: ['', Validators.required],
        password1: new FormControl<string>('', [Validators.required]),
        password2: new FormControl<string>('', [Validators.required]),

      },
      { validators: confirmPasswordValidator }
    );
  }

  signup() {
    if(this.signupForm.invalid)
    return;
    const credentials: ILogin = {
      username : this.signupForm.value.username,
      password: this.signupForm.value.password1
    }
    this.httpCallService.signup(credentials).subscribe(() => {
      this.router.navigate(['login']);
    });
  }

}
