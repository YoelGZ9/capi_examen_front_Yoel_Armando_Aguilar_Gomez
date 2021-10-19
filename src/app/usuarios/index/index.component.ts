import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usariosm: Usuarios[] = [];

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getAll().subscribe((data: Usuarios[])=>{
      this.usariosm = data;
    })
  }
}
