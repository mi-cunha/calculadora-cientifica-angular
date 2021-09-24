/**
 * Serviço responsável por executar as operações da calculadora
 * @autor Noemi Cunha <noemicunha@live.com
 * @since 1.0
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraCientificaService {

  /**
   * Definindo constantes que identificam as operações de cálculo
   */
   static readonly SOMA: string = '+';
   static readonly SUBTRACAO: string = '-';
   static readonly DIVISAO: string = '/';
   static readonly MULTIPLICACAO: string = '*';
   static readonly RAIZQUADRADA: string = 'raizquad'
   static readonly POTENCIA2: string = 'potencia2'
   static readonly POTENCIA3: string = 'potencia3' 

  constructor() { }

  /**
   * Definindo os cálculos da operação matemática 
   * Suporta operações de soma, subtração, divisão, multiplicação, raiz quadrada, potência ao quadrado e ao cubo
   * @param num1 number
   * @param num2 number
   * @param operacao string - operação que será executada
   * @return number - resultado da operação
   */

   calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao){
      case CalculadoraCientificaService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraCientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraCientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraCientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraCientificaService.RAIZQUADRADA:
          resultado = Math.sqrt(num1);
          break;  
      case CalculadoraCientificaService.POTENCIA2:
          resultado = Math.pow(num1, 2);
          break;  
      case CalculadoraCientificaService.POTENCIA3:
          resultado = Math.pow(num1, 3);
        break;
      default:
        resultado = 0
    }
  return resultado
  
  }




}
