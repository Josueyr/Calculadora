/**
 * @author Josué Yanes
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  static readonly SUMA: string = '+';
  static readonly RESTA: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICACION: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacion: string): number {
    let resultado: number; 

    switch (operacion) {
      case CalculadoraService.SUMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.RESTA:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISION:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACION:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
