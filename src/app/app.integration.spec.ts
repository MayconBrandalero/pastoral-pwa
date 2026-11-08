import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, expect, it, beforeEach } from 'vitest';

import { routes } from './app.routes';
import { BuscaComponent } from './components/busca/busca';
import { FormularioComponent } from './components/formulario/formulario';
import { ResultadoComponent } from './components/resultado/resultado';

describe('Navegação integrada entre as telas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('ativa as telas de busca, formulário e resultado pelas rotas reais', async () => {
    const harness = await RouterTestingHarness.create();

    const telaBusca = await harness.navigateByUrl(
      '/busca',
      BuscaComponent,
    );
    expect(telaBusca).toBeInstanceOf(BuscaComponent);

    const telaFormulario = await harness.navigateByUrl(
      '/formulario',
      FormularioComponent,
    );
    expect(telaFormulario).toBeInstanceOf(FormularioComponent);

    const telaResultado = await harness.navigateByUrl(
      '/resultado',
      ResultadoComponent,
    );
    expect(telaResultado).toBeInstanceOf(ResultadoComponent);

    const router = TestBed.inject(Router);
    expect(router.url).toBe('/resultado');
  });
});