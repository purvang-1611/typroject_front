import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewEmployeeComponent } from './addnew-employee.component';

describe('AddnewEmployeeComponent', () => {
  let component: AddnewEmployeeComponent;
  let fixture: ComponentFixture<AddnewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
