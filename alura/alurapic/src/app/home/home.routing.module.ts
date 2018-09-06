import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
