import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {

  constructor(private usuServ:UsuarioService) { }

  usuarios = [];
  ngOnInit() {
    this.getListaUsuarios();
  }

  getListaUsuarios(){
    this.usuServ.listaUsuarios().get()
      .forEach((lista) => {

        lista.forEach((doc)=>{

          this.usuarios.push(doc)
          console.log("id: "+doc.id+" datos: "+doc.data)
        
        })

      })
  }
}
