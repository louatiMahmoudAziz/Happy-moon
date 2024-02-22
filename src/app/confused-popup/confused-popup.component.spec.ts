import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusedPopupComponent } from './confused-popup.component';

describe('ConfusedPopupComponent', () => {
  let component: ConfusedPopupComponent;
  let fixture: ComponentFixture<ConfusedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfusedPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfusedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
