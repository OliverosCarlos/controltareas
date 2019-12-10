import { Component, OnInit } from '@angular/core';
import { TareaService} from '../../servicios/tarea.service'
import { Tarea} from '../../models/tarea';


import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {
  
  constructor(private tarSer:TareaService,private storage: AngularFireStorage) { }
  profileUrl= [];
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
          this.getUrl(doc.data().ruta_img_tarea);
        })

      })
  }

  getUrl(filePath:string){
    console.log(filePath);

    const ref = this.storage.ref(filePath);
    this.profileUrl.push(ref.getDownloadURL());
}

  // get notified when the download URL is available
//   task.snapshotChanges().pipe(
//     finalize(() => {
//       this.url = this.fileRef.getDownloadURL()
//   } )
//  )
// .subscribe()
}
