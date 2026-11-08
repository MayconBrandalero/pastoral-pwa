import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import { FormularioComponent } from './formulario';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);

    const fixture = TestBed.createComponent(FormularioComponent);
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

  it('solicita navegação para resultado ao salvar', () => {
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