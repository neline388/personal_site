import { Routes } from '@angular/router';
import { App } from './app'; 
import { home } from './home/home';
export const routes: Routes = [
    { path:'', component:home }, //component name of the work page add it later
    { path:'**', redirectTo:''}
];
