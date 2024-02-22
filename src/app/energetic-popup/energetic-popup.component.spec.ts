import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergeticPopupComponent } from './energetic-popup.component';

describe('EnergeticPopupComponent', () => {
  let component: EnergeticPopupComponent;
  let fixture: ComponentFixture<EnergeticPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergeticPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergeticPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
