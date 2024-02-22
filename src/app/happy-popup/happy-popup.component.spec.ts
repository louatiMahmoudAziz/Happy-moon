import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyPopupComponent } from './happy-popup.component';

describe('HappyPopupComponent', () => {
  let component: HappyPopupComponent;
  let fixture: ComponentFixture<HappyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HappyPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HappyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
