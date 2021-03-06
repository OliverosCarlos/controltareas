import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { Tarea } from '../../models/Tarea';
import { TareaService } from '../../servicios/tarea.service';

import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formtarea',
  templateUrl: './formtarea.component.html',
  styleUrls: ['./formtarea.component.css']
})
export class FormtareaComponent implements OnInit {
  tarea: Tarea  = {
    nombre_tarea      :'',
    descripcion_tarea :'',
    fecha_inicio      :new Date(),
    fecha_final       :new Date(),
    ruta_img_tarea    :null
  };
  
  constructor(private tareaServicio: TareaService, private router: Router, private activatedRoute: ActivatedRoute,private storage: AngularFireStorage) { }

  selectedFile: File;
  imagePreview: string | ArrayBuffer;
  edit: Boolean = false;

  fileRef:any;
  file;
  url:string;
  uploadPercent: Observable<number>;
  date_order: Date;

  task:any;
  id: string = ""
  formReg = true
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.getTarea(params.id);
      this.formReg = false
      this.id = params.id

    }

  }


  onFileUpload(event){

    //vista previa de imagen
    console.log(event.target.files[0]);
    var filename:string = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);

    //upload to firestorage
    
    this.file = event.target.files[0];
    const filePath = filename;
    this.fileRef = this.storage.ref(filePath);
    const task = this.fileRef.put(this.file);
    this.tarea.ruta_img_tarea = filePath;
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    
  }

  saveTarea(){
    if(this.formReg){
      console.log(this.tarea);
      this.tarea.fecha_final = this.date_order;
      this.tareaServicio.crearTarea(this.tarea);
      this.router.navigate(['/tareas/lista-tareas']);
    }else{
      console.log(this.tarea);
      this.tarea.fecha_final = this.date_order;
      this.tareaServicio.actualizarTarea(this.id,this.tarea);
      this.router.navigate(['/tareas/lista-tareas']);
    }
        
  }

  onSubmit(form:NgForm)
  {

  }

  getTarea(id:string){
    this.tareaServicio.listaTareas().get()
    .forEach((snapshot) => {
      snapshot.forEach((doc) => {
        if(id==doc.id){
          this.tarea = doc.data()
        console.log(doc.id, '=>', doc.data());
        }
        
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

  }


}

/**
 *   saveImage() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();

      uploadData.append('image', this.selectedFile, this.selectedFile.name);
      uploadData.append('description',this.image.description);
      uploadData.append('title',this.image.title);
    
    if(this.edit){
      this.http.put('http://localhost:3000/api/autoescuela/image'+this.image.id_image, uploadData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/images']);
        },
        err => console.error(err)        
      );

    }
    else{
      this.http.post('http://localhost:3000/api/autoescuela/image', uploadData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/images']);
        },
        err => console.error(err)        
      );
    }
  
  }

  updateImage() {
    this.imageService.updateImage(this.image.id_image, this.image)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/images']);
        },
        err => console.error(err)
      )
  }
 * 
 */