import { Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { MainComponent } from './main/main.component';

export const homeRoutes:Routes = [
    {path:'', component:MainComponent},
    {path:'imagenes', component:ImagesComponent},
];