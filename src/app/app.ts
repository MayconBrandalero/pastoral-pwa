import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly zoomLevels = [1, 1.15, 1.3];
  private zoomIndex = 0;

  get zoomLevel(): number {
    return this.zoomLevels[this.zoomIndex] ?? 1;
  }

  get zoomPercent(): number {
    return Math.round(this.zoomLevel * 100);
  }

  diminuirAmpliacao(): void {
    this.zoomIndex = Math.max(0, this.zoomIndex - 1);
  }

  ampliarInterface(): void {
    this.zoomIndex = Math.min(
      this.zoomLevels.length - 1,
      this.zoomIndex + 1,
    );
  }

  restaurarAmpliacao(): void {
    this.zoomIndex = 0;
  }
}