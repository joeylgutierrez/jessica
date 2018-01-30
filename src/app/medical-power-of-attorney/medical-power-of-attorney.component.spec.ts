import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPowerOfAttorneyComponent } from './medical-power-of-attorney.component';

describe('MedicalPowerOfAttorneyComponent', () => {
  let component: MedicalPowerOfAttorneyComponent;
  let fixture: ComponentFixture<MedicalPowerOfAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPowerOfAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPowerOfAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
