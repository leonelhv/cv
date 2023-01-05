import { Component } from '@angular/core';

interface tecnologia {
  nombre: string;
  img: string;
}

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
})
export class TecnologiasComponent {
  tecnologias: tecnologia[] = [
    {
      nombre: 'Javascript',
      img: 'assets/tecnologias/javascript.svg',
    },
    {
      nombre: 'HTML',
      img: 'assets/tecnologias/html-5.svg',
    },
    {
      nombre: 'CSS',
      img: 'assets/tecnologias/css-3.svg',
    },
    {
      nombre: 'Angular',
      img: 'assets/tecnologias/angular-icon.svg',
    },
    {
      nombre: 'Bootstrap',
      img: 'assets/tecnologias/bootstrap.svg',
    },
    {
      nombre: 'Tailwind',
      img: 'assets/tecnologias/tailwindcss-icon.svg',
    },
    {
      nombre: 'Typescript',
      img: 'assets/tecnologias/typescript-icon.svg',
    },
  ];
}
