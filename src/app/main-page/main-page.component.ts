import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {
  selectedMood: string = ''; // Variable to store the selected mood
  moodPopupVisible: boolean = false; // Flag to track the visibility of mood pop-up

  moods = [
    { name: 'Happy', icon: 'https://static.thenounproject.com/png/174696-200.png', message: "Let's keep the good vibes going!" },
    { name: 'Sad', icon: 'https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png', message: "I'm feeling down today" },
    { name: 'Calm', icon: 'https://static-00.iconduck.com/assets.00/peace-icon-511x512-gzxqaw35.png', message: "I need some time to relax" },
    { name: 'Confused', icon: 'https://static.thenounproject.com/png/1938477-200.png', message: "I'm not sure how I feel" },
    { name: 'Energetic', icon: 'https://cdn-icons-png.flaticon.com/512/3208/3208106.png', message: "I'm ready to take on the world" }
  ];

  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      if (!this.elementRef.nativeElement.querySelector('.mood-popup').contains(event.target)) {
        this.closeMoodPopup();
      }
    });
  }

  navigateToPopup(mood: string) {
    this.selectedMood = mood; // Set the selected mood
    this.moodPopupVisible = true; // Show mood pop-up
    this.router.navigate([mood.toLowerCase()]);
  }

  closeMoodPopup() {
    this.moodPopupVisible = false; // Hide mood pop-up
  }

  // Event handler to close mood pop-up when emitted from child component
  onHappyPopupClose() {
    this.closeMoodPopup();
  }
}
