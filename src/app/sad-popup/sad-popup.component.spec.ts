import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadPopupComponent } from './sad-popup.component';

describe('SadPopupComponent', () => {
  let component: SadPopupComponent;
  let fixture: ComponentFixture<SadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SadPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
