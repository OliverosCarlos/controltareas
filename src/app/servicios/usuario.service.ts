import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, DocumentData} from '@angular/fire/firestore';
import { Usuario } from '../models/Usuario'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dbPath='/usuarios'

  usuarioref:AngularFirestoreCollection<Usuario> = null;

  constructor(private db:AngularFirestore,private router: Router) {
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


   logUsr(email:string,pass:string){
    this.usuarioref.ref.where('correo','==',email).where('contrasena_usuario', '==',pass).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No existe ese correo');
        alert("ERROR, correo ó contraseña incorrectas")
        return;
      }
      snapshot.forEach(doc => {
        console.log("Existe : "+doc.id, '=>', doc.data());
        this.router.navigate(['']);
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
   }  
  
}
