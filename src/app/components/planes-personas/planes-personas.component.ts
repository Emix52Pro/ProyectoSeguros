import { Component } from '@angular/core';

enum TipoEmpresa {
  NACIONAL = 'Nacional',
  INTERNACIONAL = 'Internacional',
}

interface Plan {
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Empresa {
  nombre: string;
  logoUrl: string;
  tipo: TipoEmpresa;
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
      tipo: TipoEmpresa.NACIONAL,
      planes: [
        { nombre: 'Plan Vida Segura', descripcion: 'Muerte de manera accidental', precio: 50000 },
        { nombre: 'Plan Integral', descripcion: 'Cobertura en caso de muerte', precio: 45000 },
        { nombre: 'Plan Salud Bienestar', descripcion: 'Gastos médicos por accidente', precio: 2500 }
     
      ]
    },
    {
      nombre: 'Seguros Allstate',
      logoUrl: '../../../assets/AllstateLogo.jpg',
      tipo: TipoEmpresa.NACIONAL,
      planes: [
        { nombre: 'Plan Vida Activa', descripcion: 'Muerte por accidente ocacional', precio: 55000 },
        { nombre: 'Plan Protección Total', descripcion: 'Incapacidad permanente accidental', precio: 40000 },
        { nombre: 'Plan Salud Global', descripcion: 'Gastos médicos por accidente', precio: 3500 }
      ]
    }
    ,
    {
      nombre: 'Seguros TransAmerica',
      logoUrl: '../../../assets/Trans.jpg',
      tipo: TipoEmpresa.NACIONAL,
      planes: [
        { nombre: 'Plan Vida Plus', descripcion: 'Muerte accidental y pérdidas orgánicas ', precio: 60000 },
        { nombre: 'Plan Protección', descripcion: 'Incapacidad total y permanente', precio: 55000 },
        { nombre: 'Plan Salud Total', descripcion: 'Gastos médicos por accidente', precio: 2800 }
      ]
    }
    ,
    {
      nombre: 'Seguros Colonial',
      logoUrl: '../../../assets/Colonial.jpg',
      tipo: TipoEmpresa.INTERNACIONAL,
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
      tipo: TipoEmpresa.INTERNACIONAL,
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
      tipo: TipoEmpresa.INTERNACIONAL,
      planes: [
        { nombre: 'Plan Vida Plus', descripcion: 'Ofrece cobertura en caso de fallecimiento por cualquier causa.', precio: 68000 },
        { nombre: 'Plan Protección Global', descripcion: 'Cobertura en caso de muerte accidental.', precio: 78000 },
        { nombre: 'Plan Salud Elite', descripcion: 'Brinda cobertura amplia para gastos médicos.', precio: 3200 }
      ]
    }

    ,
    {
      nombre: 'Seguros Sur One',
      logoUrl: '../../../assets/Sur.png',
      tipo: TipoEmpresa.INTERNACIONAL,
      planes: [
        { nombre: 'Plan Bronce', descripcion: 'Daños por pérdidas o robos totales', precio: 30000 },
        { nombre: 'Plan Plata', descripcion: 'Daños por perdidas o robos parciales.', precio: 40000 },
        { nombre: 'Plan Oro', descripcion: 'Daños por pérdidas parciales, robo por pérdidas Parciales', precio: 50000 }
      ]
    }
    ,
    {
      nombre: 'Seguros Zurich',
      logoUrl: '../../../assets/zuri.png',
      tipo: TipoEmpresa.INTERNACIONAL,
      planes: [
        { nombre: 'Seguro Planeta', descripcion: 'Muerte del titular de la Poliza', precio: 45000 },
        { nombre: 'Seguro Estandar', descripcion: 'Perdida total por daño o robo', precio: 20000 },
        { nombre: 'Seguro Basico', descripcion: 'Cubre lesiones corporales y daños a propiedad ajena', precio: 15000 }
      ]
    }
    ,
    {
      nombre: 'Seguros Mapfre',
      logoUrl: '../../../assets/mapfre.png',
      tipo: TipoEmpresa.INTERNACIONAL,
      planes: [
        { nombre: 'Seguro Etandar', descripcion: 'Muerte del titular por cualquier causa', precio: 15000 },
        { nombre: 'Seguro Basico', descripcion: 'Perdida total por cualquier motivo', precio: 25000 },
        { nombre: 'Seguro Exclusivo', descripcion: 'Cubre lesiones corporales y daños a propiedad ajena', precio: 40000 }
      ]
    }
    // Agrega más empresas y sus planes aquí
  ];
  empresasNacionales: Empresa[] = [];
  empresasInternacionales: Empresa[] = [];
  constructor() {
    // Filtrar las empresas iniciales
    this.verTodos();
  }

  verTodos() {
    // Mostrar todas las empresas
    this.empresasNacionales = this.empresas.filter(emp => emp.tipo === TipoEmpresa.NACIONAL);
    this.empresasInternacionales = this.empresas.filter(emp => emp.tipo === TipoEmpresa.INTERNACIONAL);
  }

  verNacionales() {
    // Mostrar solo las empresas nacionales
    this.empresasNacionales = this.empresas.filter(emp => emp.tipo === TipoEmpresa.NACIONAL);
    this.empresasInternacionales = [];
  }

  verInternacionales() {
    // Mostrar solo las empresas internacionales
    this.empresasInternacionales = this.empresas.filter(emp => emp.tipo === TipoEmpresa.INTERNACIONAL);
    this.empresasNacionales = [];
  }
  };


