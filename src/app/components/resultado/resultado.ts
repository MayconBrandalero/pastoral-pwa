import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './resultado.html'
})
export class ResultadoComponent {
  historico = [
    { data: '15/10/2026', peso: '14.2 kg', altura: '95.0 cm' },
    { data: '15/08/2026', peso: '13.8 kg', altura: '93.5 cm' }
  ];

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/busca']);
  }
}