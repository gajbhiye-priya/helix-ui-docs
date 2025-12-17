
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ButtonComponent } from './Components/button/button.component';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { InputComponent } from './Components/input/input.component';
import { AlertComponent } from './Components/alert/alert.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'card', component: CardComponent },
  { path: 'input', component: InputComponent },
  { path: 'alert', component: AlertComponent }
];