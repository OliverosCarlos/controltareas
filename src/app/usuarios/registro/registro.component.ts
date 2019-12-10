import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../servicios/usuario.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
usuario:Usuario = {
  nombre_usuario         : '',
  contrasena_usuario     : '',
  edad                   : '',
  ocupacion              : '',
  correo                 : '',
  ruta_img_usuario       : ''
};
  
  constructor(private usuServ: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute,private storage: AngularFireStorage) { }
  selectedFile: File;
  imagePreview: string | ArrayBuffer;
  edit: Boolean = false;

  fileRef:any;
  file;
  url:string;
  uploadPercent: Observable<number>;
  ngOnInit() {
  }

  onFileUpload(event){

    //vista previa de imagen
    console.log(event.target.files[0]);
    var filename:string = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);

    //upload to firestorage
    
    this.file = event.target.files[0];
    const filePath = filename;
    this.fileRef = this.storage.ref(filePath);
    const task = this.fileRef.put(this.file);
    this.usuario.ruta_img_usuario = filePath;
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    
  }

  saveUsuario(){
    console.log(this.usuario);
    this.usuServ.crearUsuario(this.usuario);
  }

}
