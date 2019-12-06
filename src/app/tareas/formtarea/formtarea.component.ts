import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { Tarea } from '../../models/Tarea';
import { TareaService } from '../../servicios/tarea.service';

@Component({
  selector: 'app-formtarea',
  templateUrl: './formtarea.component.html',
  styleUrls: ['./formtarea.component.css']
})
export class FormtareaComponent implements OnInit {
  tarea: Tarea  = {
    nombre_tarea      :'',
    descripcion_tarea :'',
    fecha_inicio      :'',
    fecha_final       :'',
    ruta_img_tarea    :''
  };
  constructor(private tareaServicio: TareaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  selectedFile: File;
  imagePreview: string | ArrayBuffer;
  edit: Boolean = false;

  ngOnInit() {
  }


  onFileUpload(event){
    console.log(event.target.files);
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
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