import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Usuario } from '../models/Usuario'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dbPath='/usuarios'

  usuarioref:AngularFirestoreCollection<Usuario> = null;

  constructor(private db:AngularFirestore) {
    this.usuarioref = db.collection(this.dbPath);
   }

  crearUsuario(usuario:Usuario):void{
    this.usuarioref.add({...usuario});
  }

  actualizarUsuario(key:string,value:Usuario):Promise<void>{
    return this.usuarioref.doc(key).update(value);
  }

  eliminarUsuario(key:string):Promise<void>{
    return this.usuarioref.doc(key).delete();
  }
 
  listaUsuarios():AngularFirestoreCollection<Usuario>{
      console.log("Lista usuarios: "+this.usuarioref);
    return this.usuarioref;
  }

     
     
  
}
