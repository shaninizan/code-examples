import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: InputComponent,
    title: 'Shani Brown - Angular Routing: Input a Number',
  },
  {
    path: ':result',
    component: ResultComponent,
    title: 'Shani Brown - Angular Routing: Number Results',
  },
];
