import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresentationComponent } from './addpresentation.component';

describe('AddpresentationComponent', () => {
  let component: AddpresentationComponent;
  let fixture: ComponentFixture<AddpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
