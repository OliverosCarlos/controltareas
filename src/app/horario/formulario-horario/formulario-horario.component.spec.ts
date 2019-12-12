import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHorarioComponent } from './formulario-horario.component';

describe('FormularioHorarioComponent', () => {
  let component: FormularioHorarioComponent;
  let fixture: ComponentFixture<FormularioHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
