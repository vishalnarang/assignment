import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesComponent } from './public-pages.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwCommonModule } from '../jw-common/jw-common.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export const publicPagesModuleRoutes: Routes = [
  {
    path: '',
    component: PublicPagesComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: '',
        redirectTo: '/signup',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full',
  }
]



@NgModule({
  declarations: [
    PublicPagesComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(publicPagesModuleRoutes),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    JwCommonModule,
    FormsModule
  ]
})
export class PublicPagesModule { }
