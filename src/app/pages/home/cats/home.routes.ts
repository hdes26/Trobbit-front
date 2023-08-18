import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

export const catsRoutes:Routes = [
    {path:'', component:ViewComponent},
    {path:':id', component:EditComponent},
];