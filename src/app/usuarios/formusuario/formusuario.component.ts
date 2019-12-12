import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService} from '../../servicios/usuario.service';
import { Usuario } from '../../models/Usuario';

import { Router, ActivatedRoute } from '@angular/router';


import { AngularFireStorage } from '@angular/fire/storage';


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
  constructor(private usuarioServicio:UsuarioService, private storage: AngularFireStorage,private router: Router, private activatedRoute: ActivatedRoute,) { }
  profileUrl= [];
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.getUsuario(params.id);

    }
    
  }

  getUsuario(id:string){
    this.usuarioServicio.listaUsuarios().get()
    .forEach((snapshot) => {
      snapshot.forEach((doc) => {
        if(id==doc.id){
          this.usuario = doc.data()
        console.log(doc.id, '=>', doc.data());
        this.getUrl(doc.data().ruta_img_usuario);
        }
        
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

  }

  getUrl(filePath:string){
    console.log(filePath);

    const ref = this.storage.ref(filePath);
    this.profileUrl.push(ref.getDownloadURL());
}


}
