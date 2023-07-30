import { Component } from '@angular/core';

@Component({
  selector: 'app-planes-personas',
  templateUrl: './planes-personas.component.html',
  styleUrls: ['./planes-personas.component.css']
})
export class PlanesPersonasComponent {
  formData = {
    nombres: '',
    apellidos: '',
    edad: null,
    genero: '',
    estadoCivil: '',
    correo: '',
    numeroCelular: '',
    provincia: '',
    ciudad: ''
  };
   // Aquí puedes definir las ciudades según la provincia seleccionada
  // Por simplicidad, usaremos algunas ciudades ficticias
  ciudades: string[] = [];

  onProvinciaChange() {
    // Aquí deberías implementar la lógica para obtener las ciudades basadas en la provincia seleccionada
    // Por ahora, utilizaremos ciudades ficticias para cada provincia
    switch (this.formData.provincia) {
      case 'provincia1':
        this.ciudades = ['Cuenca', 'Giron', 'Santa Isabel'];
        break;
      case 'provincia2':
        this.ciudades = ['Pasaje', 'Machala', 'Santa Rosa'];
        break;
      default:
        this.ciudades = [];
    }
  }

  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o realizar las acciones necesarias
    console.log(this.formData);
  }
}

