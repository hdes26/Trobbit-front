import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { homeRoutes } from './pages/home/home.routes';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:homeRoutes,    
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
