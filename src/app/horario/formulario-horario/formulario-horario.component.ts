import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-horario',
  templateUrl: './formulario-horario.component.html',
  styleUrls: ['./formulario-horario.component.css']
})
export class FormularioHorarioComponent implements OnInit {
horas = 24;
  constructor() { }

  ngOnInit() {
  }

}
