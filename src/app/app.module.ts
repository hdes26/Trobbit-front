import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { ImagesComponent } from './pages/home/images/images.component';
import { MainComponent } from './pages/home/main/main.component';
import { CatsComponent } from './pages/home/cats/cats.component';
import { EditComponent } from './pages/home/cats/edit/edit.component';
import { ViewComponent } from './pages/home/cats/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImagesComponent,
    MainComponent,
    CatsComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
