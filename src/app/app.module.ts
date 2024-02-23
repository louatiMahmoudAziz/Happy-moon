import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HappyPopupComponent } from './happy-popup/happy-popup.component';
import { SadPopupComponent } from './sad-popup/sad-popup.component';
import { CalmPopupComponent } from './calm-popup/calm-popup.component';
import { EnergeticPopupComponent } from './energetic-popup/energetic-popup.component';
import { ConfusedPopupComponent } from './confused-popup/confused-popup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HappyPopupComponent,
    SadPopupComponent,
    CalmPopupComponent,
    EnergeticPopupComponent,
    ConfusedPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
