import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: Usuario  = {
    nombre_usuario    :'',
    edad :'',
    ocupacion      :'',
    correo       :'',
    contrasena_usuario   :'',
    ruta_img_usuario:''
  };
  constructor(private usuarioServicio: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }
  selectedFile: File;
  imagePreview: string | ArrayBuffer;
  edit: Boolean = false;
  ngOnInit() {
  }
  
  onFileUpload(event){
    console.log(event.target.files);
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}
