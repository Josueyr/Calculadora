import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para o valor padrão.
   *
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }
  /**
   * Adciona o numero selecionado para o calculo
   *
   * @param string numero
   * @return void
   */
  AdcionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }
  /**
   * Retorna o valor concatenado e trata separador decimal
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual==='0'||numAtual===null){
      numAtual='';
    }
    if(numConcat==='.'&&numAtual===''){
      return '0.';
    }
    if(numConcat==='.'&&numAtual.indexOf('.')>-1){
      return numAtual;
    }
    return numAtual + numConcat;
  }
  /**
   * Executa logica quando um operador for selecionado
   * Caso já possua uma opereção selecionada, execulta a
   * operação anterior, e define a novaoperação
   *
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void{
    //apenas define operação caso não exista uma
    if(this.operacao===null){
      this.operacao=operacao;
      return;
    }

    /*Caso operação definida e numero2 selecionado,
    efetua o calculo da operação */
    if(this.numero2!==null){
      this.resultado=this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao =operacao;
      this.numero1=this.resultado.toString();
      this.numero2=null;
      this.resultado=null;
    }
  }

  /**
   * Efetua o  cálculo de uma operação
   *
   * @return void
   */
  calcular():void{
    if(this.numero2===null){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display():string{
    if(this.resultado!== null){
      return this.resultado.toString();
    }
    if(this.numero2!==null){
      return this.numero2;
    }
    return this.numero1;
  }
}
