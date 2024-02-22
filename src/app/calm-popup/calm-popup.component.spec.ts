import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalmPopupComponent } from './calm-popup.component';

describe('CalmPopupComponent', () => {
  let component: CalmPopupComponent;
  let fixture: ComponentFixture<CalmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalmPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
