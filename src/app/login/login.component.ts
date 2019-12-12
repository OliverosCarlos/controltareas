import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usuario:Usuario=
{
  correo:'',
  contrasena_usuario:''
};

  constructor(private router: Router,private usuarioServicio:UsuarioService) { }

  ngOnInit() {
    
  }

  login(form:NgForm){
      console.log("Form enviado")
      console.log(form)
      if(!(form.errors)){ this.loginAccess(form.control.value.email,form.control.value.pass);}
  }
  /*
  loginAccess(email:string,pass:string){
    if(email=="diana.laura9625@gmail.com" && pass=="diana123"){
        console.log("si entra")
        this.router.navigate(['']);
    }
    else console.log("no entra")
}*/
loginAccess(email:string,pass:string){
  this.usuarioServicio.logUsr(email,pass)
  }



}

