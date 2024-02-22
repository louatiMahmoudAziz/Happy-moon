// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HappyPopupComponent } from './happy-popup/happy-popup.component';
import { SadPopupComponent } from './sad-popup/sad-popup.component';
import { CalmPopupComponent } from './calm-popup/calm-popup.component';
import { ConfusedPopupComponent } from './confused-popup/confused-popup.component';
import { EnergeticPopupComponent } from './energetic-popup/energetic-popup.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'happy', component: HappyPopupComponent },
  { path: 'sad', component: SadPopupComponent },
  { path: 'calm', component: CalmPopupComponent },
  { path: 'confused', component: ConfusedPopupComponent },
  { path: 'energetic', component: EnergeticPopupComponent },
  // Add routes for other moods
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
