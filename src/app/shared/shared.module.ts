import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownDirective
  ]
})
export class SharedModule {}
