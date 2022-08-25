import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModelsComponent } from './models/models.component';
import { ReturnerComponent } from './returner/returner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomeSpecialDirDirective } from './someSpecialDir.directive';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        ModelsComponent,
        ReturnerComponent,
        SomeSpecialDirDirective
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'models', component: ModelsComponent},
    ]),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
