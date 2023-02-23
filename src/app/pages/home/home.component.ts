import { Component } from '@angular/core';
interface seccion {
  path: string;
  texto: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public secciones: Array<seccion> = [
    {
      path: 'inicio',
      texto: 'Inicio',
    },
    {
      path: 'sobre_mi',
      texto: 'Sobre mi',
    },
    {
      path: 'tecnologias',
      texto: 'Tecnologias',
    },
    {
      path: 'proyectos',
      texto: 'Proyectos',
    },
    // {
    //   path: 'contacto',
    //   texto: 'Contacto',
    // },
  ];
}
