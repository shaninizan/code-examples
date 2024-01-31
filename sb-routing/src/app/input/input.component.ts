import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  constructor(private readonly router: Router) {}

  @Input() finNum!: string;

  finNumForm = new FormGroup({
    finNum: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d*\.?\d+\s?[b|g|k|m|t]?$/i),
    ]),
  });

  submitFinNum() {
    const queryParams = { finNum: this.finNumForm.value.finNum };
    this.router.navigate(['/result'], { queryParams: queryParams });
  }
}
