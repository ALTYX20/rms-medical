import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresentationComponent } from './listpresentation.component';

describe('ListpresentationComponent', () => {
  let component: ListpresentationComponent;
  let fixture: ComponentFixture<ListpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
