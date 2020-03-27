import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReferenceComponent } from './list-reference.component';

describe('ListReferenceComponent', () => {
  let component: ListReferenceComponent;
  let fixture: ComponentFixture<ListReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
