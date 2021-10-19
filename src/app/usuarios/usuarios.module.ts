import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { IndexComponent } from './index/index.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
