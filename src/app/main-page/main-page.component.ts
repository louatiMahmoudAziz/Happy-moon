import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  moods = [
    { name: 'Happy', icon: 'https://static.thenounproject.com/png/174696-200.png', message: "Let's keep the good vibes going!" },
    { name: 'Sad', icon: 'https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png', message: "I'm feeling down today" },
    { name: 'Calm', icon: 'https://static-00.iconduck.com/assets.00/peace-icon-511x512-gzxqaw35.png', message: "I need some time to relax" },
    { name: 'Confused', icon: 'https://static.thenounproject.com/png/1938477-200.png', message: "I'm not sure how I feel" },
    { name: 'Energetic', icon: 'https://cdn-icons-png.flaticon.com/512/3208/3208106.png', message: "I'm ready to take on the world" }
  ];

  constructor(private router: Router) {}

  navigateToPopup(mood: string) {
    this.router.navigate([mood.toLowerCase()]);
  }
}
