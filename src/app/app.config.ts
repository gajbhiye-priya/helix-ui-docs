
// import { routes } from './app.routes';

import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ButtonComponent } from './Components/button/button.component';
import { CardComponent } from './Components/card/card.component';
import { InputComponent } from './Components/input/input.component';
import { AlertComponent } from './Components/alert/alert.component';
import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
