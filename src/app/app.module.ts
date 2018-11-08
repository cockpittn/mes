import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './service/auth/auth.service';
import {AuthGuardService} from './service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { UserProfileComponent } from './user/user-profile.component';
import { RendementComponent } from './apps/rendement/rendement.component';
import { FoComponent } from './apps/fo/fo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './service/dataExchange/data.service';
import {AuthStatusService} from './service/auth/authStatus.service';
import {UnauthenticatedGuardService} from './service/auth/unauthenticated-guard.service';
import {NgbModule, NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    UserProfileComponent,
    RendementComponent,
    FoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DataService,
    AuthStatusService,
    UnauthenticatedGuardService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
