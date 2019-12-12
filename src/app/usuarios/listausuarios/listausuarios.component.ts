import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../models/Usuario';

import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {

  constructor(private usuServ:UsuarioService, private storage: AngularFireStorage,private router: Router, private activatedRoute: ActivatedRoute) {}
  profileUrl= [];
  usuarios = [];

  listaGrupos = false;
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      console.log(params.id);
      
      this.listaGrupos = true;
    }
    this.getListaUsuarios();
    
  }

  getListaUsuarios(){
    this.usuServ.listaUsuarios().get()
      .forEach((lista) => {

        lista.forEach((doc)=>{

          this.usuarios.push(doc)
          console.log("id: "+doc.id+" datos: "+doc.data)
          this.getUrl(doc.data().ruta_img_usuario);
        })

      })
  }

  getUrl(filePath:string){
    console.log(filePath);

    const ref = this.storage.ref(filePath);
    this.profileUrl.push(ref.getDownloadURL());
}
}
