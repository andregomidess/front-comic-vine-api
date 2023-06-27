import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocComponent } from './ad-hoc.component';

describe('AdHocComponent', () => {
  let component: AdHocComponent;
  let fixture: ComponentFixture<AdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdHocComponent]
    });
    fixture = TestBed.createComponent(AdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
