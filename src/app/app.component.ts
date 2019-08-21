import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  numero1:number; numero2:number; Resultado:number;
  Calculo(numero1:number,num2:number,cal:string): number
  {
    switch(cal)
    {
      case "sumar":
        return this.Resultado = this.numero1 + this.numero2;
      case "restar":
        return this.Resultado = this.numero1 - this.numero2;
      case "multiplicacion":
        return this.Resultado = this.numero1 * this.numero2;
      case "dividir":
        if(this.numero2 == 0)
        {
        alert("IMPOSIBLE DIVIDIR POR CERO!!!");
        return null;
        }
        else
        {
        return this.Resultado = this.numero1 / this.numero2;
        }
      case "modulo":
        return this.Resultado = this.numero1 % this.numero2;
        case "limpiar":
            return null;
    }
  }
  rest(){
    this.Resultado = null;
    this.numero1 = null;
    this.numero2 = null;
  }
}