import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxalaComponent } from './oxala.component';

describe('OxalaComponent', () => {
  let component: OxalaComponent;
  let fixture: ComponentFixture<OxalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
