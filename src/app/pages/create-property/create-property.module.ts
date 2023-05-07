import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePropertyRoutingModule } from './create-property-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreatePropertyRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CreatePropertyModule { }
