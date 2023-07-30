import { Component } from '@angular/core';
import { AutomovilesService, Vehiculo, Aseguradora, Seguro } from '../../services/automoviles.service';

@Component({
  selector: 'app-planes-automoviles',
  templateUrl: './planes-automoviles.component.html',
  styleUrls: ['./planes-automoviles.component.css']
})
export class PlanesAutomovilesComponent {
//Atributos
marca:string="";
anio:number=0;
modelo:string="";
vehiculo:any;
//Arreglos
vehiculos:Vehiculo[]=[];
modelos:string[]=[];
marcas:string[]=[];
anios_filtro:number[]=[];
modelos_filtro:string[]=[];
seguros:Seguro[]=[];
//Métodos
cargarDatos(){
  this.obtenerModelos();
  this.obtenerAnios();
}

obtenerVehiculo(){
  if(this.marca!="" && this.anio!=0 && this.modelo!=""){
    let ob:Vehiculo={
      marca:this.marca,
      modelo:this.modelo,
      anio:this.anio
     }
     this.vehiculo=ob;
  }
}

obtenerModelos(){
  this.modelos_filtro=[];

  for(let vehiculo of this.vehiculos.filter(auto=> auto.marca===this.marca)){
    if(!this.modelos_filtro.includes(vehiculo.modelo)){
      this.modelos_filtro.push(vehiculo.modelo);
    }
  
  }
}

obtenerAnios(){
  this.anios_filtro=[];

  for(let vehiculo of this.vehiculos.filter(auto=> auto.marca===this.marca && auto.modelo===this.modelo)){
    if(!this.anios_filtro.includes(vehiculo.anio)){
      this.anios_filtro.push(vehiculo.anio);
    }
  
  }
}

ngOnInit():void{
  this.vehiculos=this.automovilesService.getVehiculos();
  this.modelos=this.automovilesService.getModelos();
  this.marcas=this.automovilesService.getMarcas();
  this.seguros=this.automovilesService.getSeguros();

  }
  
  constructor(private automovilesService: AutomovilesService){
    if (this.vehiculo) {
      this.marca = this.vehiculo.marca;
      this.modelo = this.vehiculo.modelo;
      this.anio = this.vehiculo.anio;
    }

  }
  }



