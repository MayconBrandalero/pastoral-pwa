import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FormularioComponent } from './formulario';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cria o componente do formulário', () => {
    expect(component).toBeTruthy();
  });

  it('inicia com os valores demonstrativos do formulário', () => {
    expect(component.peso).toBe(14.2);
    expect(component.altura).toBe(95.0);
    expect(component.obs).toBe('');
  });

  it('avisa que o formulário não grava nem sincroniza dados', () => {
    const texto = fixture.nativeElement.textContent.toLowerCase();

    expect(texto).toContain('protótipo demonstrativo');
    expect(texto).toContain('não grava, salva nem sincroniza dados');
    expect(texto).toContain('continuar demonstração');
  });

  it('solicita navegação para resultado ao continuar', () => {
    const navegar = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.salvar();

    expect(navegar).toHaveBeenCalledWith(['/resultado']);
  });

  it('solicita navegação para busca ao cancelar', () => {
    const navegar = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.cancelar();

    expect(navegar).toHaveBeenCalledWith(['/busca']);
  });
});