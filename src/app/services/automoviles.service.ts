import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomovilesService {
//Arreglo de marcas
marcas=["Audi", "Chevrolet"];
//Arreglo de modelos
modelos=["New Q7","Q8", "Aveo", "Camaro"]
//Arreglo de años
anios=[2022,2023]
//Arreglo de vehiculos
vehiculos:Vehiculo[]=[
{
  marca:"Audi",
  modelo:"New Q7",
  anio:2023
},
{
  marca:"Audi",
  modelo:"New Q7",
  anio:2022
},
{
  marca:"Audi",
  modelo:"Q8",
  anio:2023
},
{
  marca:"Chevrolet",
  modelo:"Aveo",
  anio:2022
}
]
//Arreglo de Aseguradoras
aseguradoras:Aseguradora[]=[
  {
  nombre:"Seguros Equinocial",
  descripcion:"Responsabilidad Civil: $ 40,000 por evento\nMuerte Accidental:$ 6,000 por ocupante\nGastos Médicos:$ 4,000 por ocupante",
  imagen:"https://compara-ecuador.seguros123.com/img/seguros/equinoccial.png"

  },
  {
    nombre:"SEGUROS UNIDOS - SU AUTO",
    descripcion:"Responsabilidad Civil: $ 30,000 anual\nMuerte Accidental: $ 5,000 por ocupante,\nGastos Médicos: $ 2,500 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/unidos.png"
  
    }
]
//Arreglo de seguros
seguros:Seguro[]=[
{
  aseguradora:{
    nombre:"Seguros Equinocial",
    descripcion:"Responsabilidad Civil: $ 40,000 por evento\nMuerte Accidental:$ 6,000 por ocupante\nGastos Médicos:$ 4,000 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/equinoccial.png"
  },
  vehiculo:{
      marca:"Audi",
      modelo:"Q8",
      anio:2023
  }
},

{
  aseguradora:{
    nombre:"Seguros Equinocial",
    descripcion:"Responsabilidad Civil: $ 40,000 por evento\nMuerte Accidental:$ 6,000 por ocupante\nGastos Médicos:$ 4,000 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/equinoccial.png"
  },
  vehiculo:{
   
    marca:"Audi",
    modelo:"New Q7",
    anio:2023
  }
},
{
  aseguradora:{
    nombre:"SEGUROS UNIDOS - SU AUTO",
    descripcion:"Responsabilidad Civil: $ 30,000 anual\nMuerte Accidental: $ 5,000 por ocupante,\nGastos Médicos: $ 2,500 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/unidos.png"
  
  },
  vehiculo:{
   
    marca:"Audi",
    modelo:"New Q7",
    anio:2023
  }
},
{
  aseguradora:{
    nombre:"SEGUROS UNIDOS - SU AUTO",
    descripcion:"Responsabilidad Civil: $ 30,000 anual\nMuerte Accidental: $ 5,000 por ocupante,\nGastos Médicos: $ 2,500 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/unidos.png"
  },
  vehiculo:{
   
    marca:"Audi",
    modelo:"New Q7",
    anio:2022
  }
},

{
  aseguradora:{
    nombre:"SEGUROS UNIDOS - SU AUTO",
    descripcion:"Responsabilidad Civil: $ 30,000 anual\nMuerte Accidental: $ 5,000 por ocupante,\nGastos Médicos: $ 2,500 por ocupante",
    imagen:"https://compara-ecuador.seguros123.com/img/seguros/unidos.png"
  },
  vehiculo:{
   
    marca:"Chevrolet",
  modelo:"Aveo",
  anio:2022
  }
},
]


//Métodos
getVehiculos(){
  return this.vehiculos;
}
getMarcas(){
  return this.marcas;
}
getModelos(){
  return this.modelos;
}
getAnios(){
  return this.anios;
}
getAseguradoras(){
  return this.aseguradoras;
}
getSeguros(){
  return this.seguros;
}

  constructor() { }
}
//Interfaces
export interface Vehiculo{
  marca:string;
 modelo:string;
 anio:number;
}

export interface Seguro{
  aseguradora:Aseguradora;
 vehiculo:Vehiculo;
}

export interface Aseguradora{
  nombre:string;
  descripcion:string;
  imagen:string;
}