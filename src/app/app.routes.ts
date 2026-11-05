import { Routes } from '@angular/router';
import { BuscaComponent } from './components/busca/busca';
import { FormularioComponent } from './components/formulario/formulario';
import { ResultadoComponent } from './components/resultado/resultado';

export const routes: Routes = [
  { path: '', redirectTo: 'busca', pathMatch: 'full' },
  { path: 'busca', component: BuscaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'resultado', component: ResultadoComponent }
];