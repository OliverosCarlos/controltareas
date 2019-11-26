import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormusuariosComponent } from './formusuarios.component';

describe('FormusuariosComponent', () => {
  let component: FormusuariosComponent;
  let fixture: ComponentFixture<FormusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
