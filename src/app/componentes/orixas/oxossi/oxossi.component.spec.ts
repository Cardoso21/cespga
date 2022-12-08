import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxossiComponent } from './oxossi.component';

describe('OxossiComponent', () => {
  let component: OxossiComponent;
  let fixture: ComponentFixture<OxossiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxossiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxossiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
