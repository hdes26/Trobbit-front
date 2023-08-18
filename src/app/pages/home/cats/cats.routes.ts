import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { FavoriteImagesResolver } from './edit/favoriteImages.resolver';

export const catsRoutes: Routes = [
    { path: '', component: ViewComponent },
    {
        path: 'update/:id',
        component: EditComponent,
        resolve: {
            data: FavoriteImagesResolver
        },
    },
    { path: 'create', component: CreateComponent },

];