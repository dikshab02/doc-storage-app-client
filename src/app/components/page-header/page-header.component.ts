import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CoreService } from 'src/app/services/core.service';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  constructor(public authService: AuthService, private router: Router,
    public coreService: CoreService, private httpCallService: HttpCallService) {}


    logout() {
      this.httpCallService.logout().subscribe(()=>{
        localStorage.removeItem('LOGIN_USER');
        this.router.navigate(['/login']);
      })

    }


  home() {
    this.router.navigateByUrl('home');
  }

  signup() {
    this.coreService.button_flag = true;
    console.log("f",this.coreService.button_flag)
    this.router.navigateByUrl('/sign-up');
  }

  login() {
    this.coreService.button_flag = false;
    console.log("q",this.coreService.button_flag)
    this.router.navigateByUrl('/login');
  }
}
