import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatsModule } from './cats/cats.module';
import { ImagesComponent } from './images/images.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/share/navbar/navbar.component';
import { ImageModule } from './images/image.module';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CatsModule,
    ImageModule,
    MainModule
  ]
})
export class HomeModule { }