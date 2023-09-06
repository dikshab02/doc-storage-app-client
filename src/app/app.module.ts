import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DocumentDetailComponent } from './components/document-detail/document-detail.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CookieInterceptor } from './interceptors/cookie.interceptor';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FilesizePipe } from './pipes/filesize.pipe';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    DocumentDetailComponent,
    DocumentUploadComponent,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
