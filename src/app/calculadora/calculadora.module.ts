import { NgModule } from '@angular/core';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({
  imports: [
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
