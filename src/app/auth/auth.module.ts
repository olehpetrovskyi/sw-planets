import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@swp/layout/layout.module';
import { AuthRoutingModule } from './auth-routing.module';

import { SignInComponent } from './components';
import { MaterialModule } from '@swp/layout/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const COMPONENTS = [
  SignInComponent
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: []
})
export class AuthModule {}
