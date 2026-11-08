import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Crianca {
  id: number;
  nome: string;
  idade: string;
  responsavel: string;
}

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './busca.html',
  styleUrl: './busca.css',
})
export class BuscaComponent {
  termoBusca = '';

  criancas: Crianca[] = [
    {
      id: 1,
      nome: 'Lucas Gabriel Silva',
      idade: '3 anos e 2 meses',
      responsavel: 'Mariana Silva',
    },
    {
      id: 2,
      nome: 'Ana Clara Souza',
      idade: '1 ano e 8 meses',
      responsavel: 'Carla Souza',
    },
  ];

  constructor(private router: Router) {}

  get criancasFiltradas(): Crianca[] {
    const termo = this.normalizarTexto(this.termoBusca);

    if (!termo) {
      return this.criancas;
    }

    return this.criancas.filter((crianca) => {
      const nomeCompleto = this.normalizarTexto(
        `${crianca.nome} ${crianca.responsavel}`,
      );

      return nomeCompleto.includes(termo);
    });
  }

  irParaFormulario(): void {
    this.router.navigate(['/formulario']);
  }

  private normalizarTexto(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .trim();
  }
}