import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssaimComponent } from './ossaim.component';

describe('OssaimComponent', () => {
  let component: OssaimComponent;
  let fixture: ComponentFixture<OssaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
