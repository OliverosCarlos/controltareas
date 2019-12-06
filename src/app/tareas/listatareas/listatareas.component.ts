import { Component, OnInit } from '@angular/core';
import { TareaService} from '../../servicios/tarea.service'
import { Tarea} from '../../models/tarea';
@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {

  constructor(private tarSer:TareaService) { }

  tareas = []
  ngOnInit() {
    this.getListaTareas()
  }

  getListaTareas(){
    this.tarSer.listaTareas().get()
      .forEach((lista) => {

        lista.forEach((doc)=>{

          this.tareas.push(doc)
          console.log("id: "+doc.id+" datos: "+doc.data)
        
        })

      })
  }
}
