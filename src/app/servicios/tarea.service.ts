import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Tarea } from '../models/Tarea';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class TareaService {


  private dbPath='/tareas'

  tarearef:AngularFirestoreCollection<Tarea> = null;

  constructor(private db:AngularFirestore) { 
    this.tarearef = db.collection(this.dbPath);
  }

  crearTarea(tarea:Tarea):void{
    this.tarearef.add({...tarea});
  }

  actualizarTarea(key:string,value:Tarea):Promise<void>{
    return this.tarearef.doc(key).update(value);
  }

  eliminarTarea(key:string):Promise<void>{
    return this.tarearef.doc(key).delete();
  }

  listaTareas():AngularFirestoreCollection<Tarea>{
      console.log("Lista tareas: "+this.tarearef);
    return this.tarearef;
  }
}
