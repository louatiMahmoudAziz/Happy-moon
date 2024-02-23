import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-happy-popup',
  templateUrl: './happy-popup.component.html',
  styleUrls: ['./happy-popup.component.css']
})
export class HappyPopupComponent {
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  onClosePopup() {
    this.closePopup.emit();
  }
}
