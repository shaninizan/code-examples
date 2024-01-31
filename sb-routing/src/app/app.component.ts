import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, InputComponent],
  template: `
    <main>
      <h1>{{ title }}</h1>
      <section><router-outlet></router-outlet></section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shani Brown - Angular Routing';
}
