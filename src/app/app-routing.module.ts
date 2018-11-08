import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './service/auth/auth-guard.service';
import {SigninComponent} from './auth/signin/signin.component';
import {UserProfileComponent} from './user/user-profile.component';
import {RendementComponent} from './apps/rendement/rendement.component';
import {FoComponent} from './apps/fo/fo.component';
import {UnauthenticatedGuardService} from './service/auth/unauthenticated-guard.service';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent},
  { path: 'rendement' , component: RendementComponent, canActivate: [AuthGuardService]},
  { path: 'fo' , component: FoComponent, canActivate: [AuthGuardService]},
  { path: 'profile' , component: UserProfileComponent, canActivate: [AuthGuardService]},
  { path: 'signin', component: SigninComponent, canActivate: [UnauthenticatedGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
