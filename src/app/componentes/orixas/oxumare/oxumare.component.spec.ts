import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxumareComponent } from './oxumare.component';

describe('OxumareComponent', () => {
  let component: OxumareComponent;
  let fixture: ComponentFixture<OxumareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxumareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxumareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
