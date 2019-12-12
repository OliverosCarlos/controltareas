import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {Horario} from '../models/Horario';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HorarioService 
{
  private dbPath='/horario';
  horarioref:AngularFirestoreCollection<Horario> = null;
  constructor(private db:AngularFirestore)
  {
    this.horarioref = db.collection(this.dbPath);
  }

  actualizarHorario
}
