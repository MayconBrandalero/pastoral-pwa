import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class BuscaComponent {
  criancas = [
    { id: 1, nome: 'Lucas Gabriel Silva', idade: '3 anos e 2 meses', responsavel: 'Mariana Silva' },
    { id: 2, nome: 'Ana Clara Souza', idade: '1 ano e 8 meses', responsavel: 'Carla Souza' }
  ];

  constructor(private router: Router) {}

  irParaFormulario() {
    this.router.navigate(['/formulario']);
  }
}