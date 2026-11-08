import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import { BuscaComponent } from './busca';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);

    const fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cria o componente de busca', () => {
    expect(component).toBeTruthy();
  });

  it('apresenta as duas crianças de demonstração', () => {
    expect(component.criancas).toHaveLength(2);
    expect(component.criancas[0].nome).toBe('Lucas Gabriel Silva');
    expect(component.criancas[1].nome).toBe('Ana Clara Souza');
  });

  it('solicita navegação para o formulário', () => {
    const navegar = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.irParaFormulario();

    expect(navegar).toHaveBeenCalledWith(['/formulario']);
  });
});