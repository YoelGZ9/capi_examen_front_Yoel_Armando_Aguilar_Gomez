import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
  
const routes: Routes = [
  { path: 'usuarios', redirectTo: 'usuarios/index', pathMatch: 'full'},
  { path: 'usuarios/index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
