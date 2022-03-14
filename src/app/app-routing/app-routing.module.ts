import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';

const  routes: Routes = [  
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
