import { Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { MainComponent } from './main/main.component';
import { CatsComponent } from './cats/cats.component';
import { catsRoutes } from './cats/cats.routes';
import { ImagesResolver } from './images/images.resolver';
import { CatsResolver } from './cats/cats.resolver';

export const homeRoutes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'images', component: ImagesComponent,
        resolve: {
            data: ImagesResolver
        },
    },
    {
        path: 'cats', component: CatsComponent,
        children: catsRoutes,
        resolve: {
            data: CatsResolver
        },
    },
];