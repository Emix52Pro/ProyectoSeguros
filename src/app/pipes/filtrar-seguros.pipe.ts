import { Pipe, PipeTransform } from '@angular/core';
import { Seguro, Vehiculo } from '../services/automoviles.service';


@Pipe({
  name: 'filtrarSeguros'
})
export class FiltrarSegurosPipe implements PipeTransform {




  
  transform(value: Seguro[], arg: any): Seguro[] {
    let seguros=[];
  
    for(let seguro of value){
      if(seguro.vehiculo.marca=arg.marca && seguro.vehiculo.modelo==arg.modelo
        && seguro.vehiculo.anio==arg.anio){
          seguros.push(seguro);
        }
    }
    console.log(seguros.length);
    return seguros;
  }

}
