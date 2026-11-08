import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { BuscaComponent } from './busca';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cria o componente de busca', () => {
    expect(component).toBeTruthy();
  });

  it('apresenta as duas crianças de demonstração inicialmente', () => {
    expect(component.criancasFiltradas).toHaveLength(2);
    expect(component.criancasFiltradas[0].nome).toBe('Lucas Gabriel Silva');
    expect(component.criancasFiltradas[1].nome).toBe('Ana Clara Souza');
  });

  it('filtra pelo nome da criança sem diferenciar maiúsculas e minúsculas', () => {
    component.termoBusca = 'LUCAS';

    expect(component.criancasFiltradas).toHaveLength(1);
    expect(component.criancasFiltradas[0].nome).toBe('Lucas Gabriel Silva');
  });

  it('filtra também pelo nome da pessoa responsável', () => {
    component.termoBusca = 'carla';

    expect(component.criancasFiltradas).toHaveLength(1);
    expect(component.criancasFiltradas[0].nome).toBe('Ana Clara Souza');
  });

  it('ignora acentos na busca', () => {
    component.termoBusca = 'ana clara';

    expect(component.criancasFiltradas).toHaveLength(1);
    expect(component.criancasFiltradas[0].nome).toBe('Ana Clara Souza');
  });

  it('exibe mensagem quando não encontra resultados', () => {
    component.termoBusca = 'nome inexistente';
    fixture.detectChanges();

    const mensagem = fixture.nativeElement.querySelector(
      '[role="status"]',
    ) as HTMLElement | null;

    expect(mensagem?.textContent).toContain(
      'Nenhuma criança encontrada para essa busca.',
    );
  });

  it('solicita navegação para o formulário', () => {
    const navegar = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.irParaFormulario();

    expect(navegar).toHaveBeenCalledWith(['/formulario']);
  });
});