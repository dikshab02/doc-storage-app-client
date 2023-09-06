import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { IsNotLoginGuard } from './guards/is-not-login.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentDetailComponent } from './components/document-detail/document-detail.component';
import { DocResolverService } from './resolver/doc-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotLoginGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [IsNotLoginGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'document-upload',
    component: DocumentUploadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'document-detail/:docId',
    resolve: { documentDetail: DocResolverService },
    component: DocumentDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
