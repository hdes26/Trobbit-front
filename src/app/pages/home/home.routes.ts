import { Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { MainComponent } from './main/main.component';
import { CatsComponent } from './cats/cats.component';
import { catsRoutes } from './cats/cats.routes';

export const homeRoutes:Routes = [
    {path:'', component:MainComponent},
    {path:'images', component:ImagesComponent},
    {path:'cats', component:CatsComponent, children:catsRoutes},
];