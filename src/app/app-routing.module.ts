import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { InfoComponent } from './info/info.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { ShowPizzaComponent } from './show-pizza/show-pizza.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'info', component:InfoComponent,canActivate:[AuthGuard]},
  {path:'add-pizza', component:AddPizzaComponent,canActivate:[AuthGuard]},
  {path:'show-pizza', component:ShowPizzaComponent,canActivate:[AuthGuard]},
  {path:'edit-pizza/:name/:image/:price/:description', component:EditPizzaComponent,canActivate:[AuthGuard]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,SignUpComponent,AccueilComponent,AddPizzaComponent,InfoComponent,ShowPizzaComponent,EditPizzaComponent];
