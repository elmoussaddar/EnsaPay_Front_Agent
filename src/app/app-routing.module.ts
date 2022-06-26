import { AddClientFormComponent } from './add-client-form/add-client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { TermsComponent } from "./terms/terms.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import{ChangePasswordComponent} from "./change-password/change-password.component";


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  {path:"admin/addClient",component:AddClientFormComponent},
  { path: 'contact-us', component: ContactUsComponent },

  {path:'admin/changePassword', component: ChangePasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
