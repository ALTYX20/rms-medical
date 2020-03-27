import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyReferenceComponent } from './modify-reference.component';

describe('ModifyReferenceComponent', () => {
  let component: ModifyReferenceComponent;
  let fixture: ComponentFixture<ModifyReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
