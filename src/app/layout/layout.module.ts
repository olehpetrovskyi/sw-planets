import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@swp/layout/material/material.module';
import { CommonSpinnerComponent, HeaderComponent, ShellComponent } from './';
import { AppRoutingModule } from '@swp/app-routing.module';

export const COMPONENTS = [
  ShellComponent,
  HeaderComponent,
  CommonSpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: []
})
export class LayoutModule {}
