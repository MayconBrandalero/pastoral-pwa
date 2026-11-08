import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it, beforeEach } from 'vitest';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('cria o componente principal', () => {
    const fixture = TestBed.createComponent(App);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('exibe o nome Pastoral da Criança na barra principal', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const barra = fixture.nativeElement.querySelector('mat-toolbar');

    expect(barra?.textContent).toContain('Pastoral da Criança');
  });
});