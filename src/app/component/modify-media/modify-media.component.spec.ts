import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMediaComponent } from './modify-media.component';

describe('ModifyMediaComponent', () => {
  let component: ModifyMediaComponent;
  let fixture: ComponentFixture<ModifyMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
