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

  it('exibe os controles de ampliação e inicia em 100%', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const botaoDiminuir = fixture.nativeElement.querySelector(
      '[aria-label="Diminuir ampliação da interface"]',
    );
    const botaoAmpliar = fixture.nativeElement.querySelector(
      '[aria-label="Ampliar a interface"]',
    );
    const botaoRestaurar = fixture.nativeElement.querySelector(
      '[aria-label="Restaurar ampliação padrão"]',
    );

    expect(botaoDiminuir).toBeTruthy();
    expect(botaoAmpliar).toBeTruthy();
    expect(botaoRestaurar).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('100%');
  });

  it('amplia a interface e atualiza o percentual informado', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const botaoAmpliar = fixture.nativeElement.querySelector(
      '[aria-label="Ampliar a interface"]',
    ) as HTMLButtonElement;

    botaoAmpliar.click();
    fixture.detectChanges();

    const appShell = fixture.nativeElement.querySelector(
      '.app-shell',
    ) as HTMLElement;

    expect(appShell.style.zoom).toBe('1.15');
    expect(fixture.nativeElement.textContent).toContain('115%');
  });

  it('restaura a ampliação padrão', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const botaoAmpliar = fixture.nativeElement.querySelector(
      '[aria-label="Ampliar a interface"]',
    ) as HTMLButtonElement;
    const botaoRestaurar = fixture.nativeElement.querySelector(
      '[aria-label="Restaurar ampliação padrão"]',
    ) as HTMLButtonElement;

    botaoAmpliar.click();
    botaoAmpliar.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('130%');

    botaoRestaurar.click();
    fixture.detectChanges();

    const appShell = fixture.nativeElement.querySelector(
      '.app-shell',
    ) as HTMLElement;

    expect(appShell.style.zoom).toBe('1');
    expect(fixture.nativeElement.textContent).toContain('100%');
  });
});