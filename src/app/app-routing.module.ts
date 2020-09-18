import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { FavorsComponent } from './favors/favors.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'favors', component: FavorsComponent },
  { path: 'carousel', component: CarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
