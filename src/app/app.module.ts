import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModelsComponent } from './components/models/models.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomeSpecialDirDirective } from './someSpecialDir.directive';
import { CharacteristicComponent } from './components/characteristic/characteristic.component';
import {CarCharService} from "./components/characteristic/carChar/car-char.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AboutCharacteristicsComponent } from './components/characteristic/about-characteristics/about-characteristics.component';
import { MainSliderComponent } from './components/main/main-slider/main-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        ModelsComponent,
        SomeSpecialDirDirective,
        CharacteristicComponent,
        AboutCharacteristicsComponent,
        MainSliderComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'models', component: ModelsComponent},
      {path: 'characteristic', component: CharacteristicComponent}
    ]),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [CarCharService]
})
export class AppModule { }
