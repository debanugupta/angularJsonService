import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';

const routes: Routes = [
  { path: '', component: SignupFormComponent },
  { path: 'signupForm', component: SignupFormComponent },
  { path: 'signupDetail', component: SignupDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

