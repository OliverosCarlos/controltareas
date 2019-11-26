import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtareaComponent } from './formtarea.component';

describe('FormtareaComponent', () => {
  let component: FormtareaComponent;
  let fixture: ComponentFixture<FormtareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
