import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycompanyComponent } from './modifycompany.component';

describe('ModifycompanyComponent', () => {
  let component: ModifycompanyComponent;
  let fixture: ComponentFixture<ModifycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
