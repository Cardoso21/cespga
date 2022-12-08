import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxumComponent } from './oxum.component';

describe('OxumComponent', () => {
  let component: OxumComponent;
  let fixture: ComponentFixture<OxumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
