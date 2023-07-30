import { Component } from '@angular/core';


interface Plan {
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Empresa {
  nombre: string;
  logoUrl: string;
  planes: Plan[];
}
@Component({
  selector: 'app-planes-personas',
  templateUrl: './planes-personas.component.html',
  styleUrls: ['./planes-personas.component.css']
})

export class PlanesPersonasComponent {
  empresas: Empresa[] = [
    {
      nombre: 'Seguros Pichincha',
      logoUrl: '../../../assets/pichincha.png',
      planes: [
        { nombre: 'Plan Vida Segura', descripcion: 'Muerte de manera accidental', precio: 50000 },
        { nombre: 'Plan Integral Protección Familiar', descripcion: 'Cobertura en caso de muerte', precio: 45000 },
        { nombre: 'Plan Salud Bienestar', descripcion: 'Gastos médicos por accidente', precio: 2500 }
      ]
    },
    {
      nombre: 'Seguros Allstate',
      logoUrl: '../../../assets/AllstateLogo.jpg',
      planes: [
        { nombre: 'Plan Vida Activa', descripcion: 'Muerte por accidente ocacional', precio: 55000 },
        { nombre: 'Plan Protección Total', descripcion: 'Incapacidad permanente accidental', precio: 40000 },
        { nombre: 'Plan Salud Global', descripcion: 'Gastos médicos por accidente', precio: 3500 }
      ]
    }
    ,
    {
      nombre: 'Seguros Assurity',
      logoUrl: '../../../assets/Assurity.jpg',
      planes: [
        { nombre: 'Plan Vida Plus', descripcion: 'Muerte accidental y pérdidas orgánicas ', precio: 60000 },
        { nombre: 'Plan Protección Integral', descripcion: 'Incapacidad total y permanente', precio: 55000 },
        { nombre: 'Plan Salud Total', descripcion: 'Gastos médicos por accidente', precio: 2800 }
      ]
    }
    ,
    {
      nombre: 'Seguros Colonial',
      logoUrl: '../../../assets/Colonial.jpg',
      planes: [
        { nombre: 'Plan Vida Protegida', descripcion: 'Ofrece cobertura en caso de fallecimiento por cualquier causa', precio: 70000 },
        { nombre: 'Plan Integral Plus', descripcion: 'Cobertura en caso de muerte accidental', precio: 80000 },
        { nombre: 'Plan Salud Familiar', descripcion: 'Brinda cobertura completa.', precio: 3500 }
      ]
    }

    ,
    {
      nombre: 'Allianz Seguro',
      logoUrl: '../../../assets/Allians.jpg',
      planes: [
        { nombre: 'Plan Vida Activa', descripcion: 'Brinda cobertura en caso de fallecimiento por cualquier causa', precio: 65000 },
        { nombre: 'Plan Protección Global', descripcion: 'Cobertura en caso de muerte accidental.', precio: 75000 },
        { nombre: 'Plan Salud Elite', descripcion: 'Proporciona cobertura completa para todos los gastos', precio: 3000 }
      ]
    }

    ,
    {
      nombre: 'Seguros Prodencial',
      logoUrl: '../../../assets/Prudencial.jpg',
      planes: [
        { nombre: 'Plan Vida Plus', descripcion: 'Ofrece cobertura en caso de fallecimiento por cualquier causa.', precio: 68000 },
        { nombre: 'Plan Protección Global', descripcion: 'Cobertura en caso de muerte accidental.', precio: 78000 },
        { nombre: 'Plan Salud Elite', descripcion: 'Brinda cobertura amplia para gastos médicos.', precio: 3200 }
      ]
    }
    
    // Agrega más empresas y sus planes aquí
  ];
  };


