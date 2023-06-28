import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPowerComponent } from './super-power.component';

describe('SuperPowerComponent', () => {
  let component: SuperPowerComponent;
  let fixture: ComponentFixture<SuperPowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperPowerComponent]
    });
    fixture = TestBed.createComponent(SuperPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
