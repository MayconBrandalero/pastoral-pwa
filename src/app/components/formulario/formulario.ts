import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {
  peso: number | null = 14.2;
  altura: number | null = 95.0;
  obs: string = '';

  constructor(private router: Router) {}

  salvar() {
    this.router.navigate(['/resultado']);
  }

  cancelar() {
    this.router.navigate(['/busca']);
  }
}