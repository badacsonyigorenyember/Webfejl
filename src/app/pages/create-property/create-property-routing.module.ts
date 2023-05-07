import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePropertyComponent} from "./create-property.component";

const routes: Routes = [
  { path: '',
    component: CreatePropertyComponent
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePropertyRoutingModule { }
