import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-horario',
  templateUrl: './mostrar-horario.component.html',
  styleUrls: ['./mostrar-horario.component.css']
})
export class MostrarHorarioComponent implements OnInit {
  horas = []; 
  

  constructor() { }

  ngOnInit() {
    for(let i = 0;i<=24;i++){
      this.horas[i] = i;
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }




}
