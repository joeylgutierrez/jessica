import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsSectionComponent } from './traits-section.component';

describe('TraitsSectionComponent', () => {
  let component: TraitsSectionComponent;
  let fixture: ComponentFixture<TraitsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
