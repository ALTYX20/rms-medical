import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymediaComponent } from './modifymedia.component';

describe('ModifymediaComponent', () => {
  let component: ModifymediaComponent;
  let fixture: ComponentFixture<ModifymediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifymediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
