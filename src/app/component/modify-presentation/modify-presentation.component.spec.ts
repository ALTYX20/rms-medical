import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPresentationComponent } from './modify-presentation.component';

describe('ModifyPresentationComponent', () => {
  let component: ModifyPresentationComponent;
  let fixture: ComponentFixture<ModifyPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
