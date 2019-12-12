import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class CurrentData{
    id_usuario: string = '';
    constructor (){
    }

    getIdUsuario():string{
        return this.id_usuario;
    }
    
    setIdUsuario(id_usuario: string){
        this.id_usuario = id_usuario;
    }
}