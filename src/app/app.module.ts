import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
>>>>>>> 35576ca92345dc2f9b76506af9cf129cfe9002b1
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavorsComponent } from './favors/favors.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FavorsComponent,
    LoginComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule
=======
    BrowserAnimationsModule
>>>>>>> 35576ca92345dc2f9b76506af9cf129cfe9002b1
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FavorsComponent,
    CarouselComponent
  ]
})
export class AppModule { }
