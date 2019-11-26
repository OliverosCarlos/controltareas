import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatareasComponent } from './listatareas.component';

describe('ListatareasComponent', () => {
  let component: ListatareasComponent;
  let fixture: ComponentFixture<ListatareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
