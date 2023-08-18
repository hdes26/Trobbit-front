import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatsModule } from './cats/cats.module';
import { ImagesComponent } from './images/images.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/share/navbar/navbar.component';



@NgModule({
  declarations: [
    ImagesComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CatsModule
  ]
})
export class HomeModule { }