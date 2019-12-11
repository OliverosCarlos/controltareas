import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService} from '../../servicios/usuario.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {
  usuario:Usuario = {
    nombre_usuario         : '',
    contrasena_usuario     : '',
    edad                   : '',
    ocupacion              : '',
    correo                 : '',
    ruta_img_usuario       : ''
  };
  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit() {

   
    

  }


}
