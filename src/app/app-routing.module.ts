import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './login/login.component';
import { PageAccComponent } from './page-acc/page-acc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
  { path: 'Accueil', component: PageAccComponent,data:{depth:'1'} },
  { path: 'Formations', component: FormationComponent ,data:{depth:'2'}},
  { path: 'A-Propos', component: AboutComponent ,data:{depth:'3'}},
  { path: 'Contacts', component: ContactComponent ,data:{depth:'4'}},
  {path:'SingUp',component:SignUpComponent,data:{depth:'5'}},
  {path:'Se connecter',component:LoginComponent,data:{depth:'6'}},
  {path:'**',component:PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }