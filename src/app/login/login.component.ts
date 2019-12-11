import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/Usuario';

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

  constructor() { }

  ngOnInit() {
    
  }

  login(form:NgForm){
      console.log("Form enviado")
      console.log(form)
  }

}
