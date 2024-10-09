import { Component } from '@angular/core';
import { PaisesApiService } from '../paises-api.service';

@Component({
  selector: 'app-info-paises',
  templateUrl: './info-paises.component.html',
  styleUrls: ['./info-paises.component.css']
})
export class InfoPaisesComponent {
  paisInfo: any = null;
  errorMessage: string = '';

  constructor(private paisesApiService: PaisesApiService) {}

  buscarPais(event: Event): void {
    event.preventDefault();

    const inputElement = (event.target as HTMLFormElement).querySelector('#countryInput') as HTMLInputElement;
    const nombrePais = inputElement.value.trim();

    if (nombrePais) {
      this.paisesApiService.getPaisInfo(nombrePais).subscribe({
        next: (data) => {
          if (data && data.length > 0) {
            this.paisInfo = data[0]; // Tomamos el primer país de la lista
            this.errorMessage = ''; // Limpiar mensaje de error
          } else {
            this.errorMessage = 'No se encontró información para ese país.';
            this.paisInfo = null;
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al buscar la información del país';
          this.paisInfo = null; // Limpiar datos anteriores
        }
      });
    }
  }
}
