import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ResultadoComponent } from './resultado';

describe('ResultadoComponent', () => {
  let fixture: ComponentFixture<ResultadoComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ResultadoComponent);
    fixture.detectChanges();
  });

  it('cria o componente de resultado', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('esclarece que a pesagem não é gravada nem sincronizada', () => {
    const texto = fixture.nativeElement.textContent.toLowerCase();

    expect(texto).toContain('demonstração concluída');
    expect(texto).toContain('não é gravada nem sincronizada');
  });

  it('identifica os registros como histórico de exemplo', () => {
    const texto = fixture.nativeElement.textContent.toLowerCase();

    expect(texto).toContain('histórico de exemplo');
    expect(texto).toContain('os registros abaixo são fictícios');
    expect(texto).toContain('não foram gerados pelo formulário');
  });

  it('solicita retorno à busca', () => {
    const navegar = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const botao = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    botao.click();

    expect(navegar).toHaveBeenCalledWith(['/busca']);
  });
});