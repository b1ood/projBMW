import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModelsComponent } from './models/models.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomeSpecialDirDirective } from './someSpecialDir.directive';
import { CharacteristicComponent } from './characteristic/characteristic.component';
import {CarCharService} from "./carChar/car-char.service";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        ModelsComponent,
        SomeSpecialDirDirective,
        CharacteristicComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'models', component: ModelsComponent},
      {path: 'characteristic', component: CharacteristicComponent}
    ]),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [CarCharService]
})
export class AppModule { }
