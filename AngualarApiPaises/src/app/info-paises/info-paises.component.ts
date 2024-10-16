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
  paises: string[] = ['Spain', 'France', 'Germany', 'Italy', 'Argentina', 'Mexico', 'Japan', 'Australia', 'Brazil', 'Canada'];
  placeholderPais: string = '';
  showForm: boolean = true;
  btNewSearch: boolean = false;

  ngOnInit(): void {
    this.placeholderPais = this.obtenerPaisAleatorio();
  }

  obtenerPaisAleatorio(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.paises.length);
    return this.paises[indiceAleatorio];
  }

  newSearch(): void {
    this.showForm = true;
    this.paisInfo = false;
    this.btNewSearch = false;
  }

  buscarPais(event: Event): void {
    event.preventDefault();

    const inputElement = (event.target as HTMLFormElement).querySelector('#countryInput') as HTMLInputElement;
    const nombrePais = inputElement.value.trim();

    if (nombrePais) {
      this.showForm = false;
      this.btNewSearch = true;
      this.paisesApiService.getPaisInfo(nombrePais).subscribe({
        next: (data) => {
          if (data && data.length > 0) {
            this.paisInfo = data[0];
            this.errorMessage = ''; 
          } else {
            this.errorMessage = 'No se encontró información para ese país.';
            this.paisInfo = null;
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al buscar la información del país';
          this.paisInfo = null;
        }
      });
    }
  }
}
