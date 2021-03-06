import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddNewBusinessComponent } from './add-new-business/add-new-business.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  {path : '',redirectTo: '/signup', pathMatch: 'full'},
  {path : 'signup',component : SignupComponent},
  {path : 'signin',component : SigninComponent},
  {path : 'dashBord',component : DashbordComponent},
  {path : 'addNewBusiness',component : AddNewBusinessComponent},
  {path : 'forgetPassword',component : ForgetPasswordComponent},
  {path : '**',component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SignupComponent, SigninComponent, 
  DashbordComponent,PageNotFoundComponent,AddNewBusinessComponent,
  ForgetPasswordComponent];
