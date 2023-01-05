import { Component } from '@angular/core';

interface proyecto {
  name: string;
  status: statusProyectoEnum;
  img: string;
  description: string;
  repositorio?: string;
  demo?: string;
}

enum statusProyectoEnum {
  public = 'Public',
  private = 'Private',
  inProcess = 'Proceso',
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyectos: proyecto[] = [
    {
      name: 'Reto de FrontEndMentor: Card',
      description:
        'Es una pagina donde se realiza un card de manera responsiva ',
      img: 'assets/proyecto/card.png',
      status: statusProyectoEnum.public,
      demo: 'https://leonelhv.github.io/card-FrontEndMentor/',
      repositorio: 'https://github.com/leonelhv/card-FrontEndMentor',
    },
    {
      name: 'Reto de FrontEndMentor: Card',
      description: 'Página responsiva mostrando un hero y un menu responsivo',
      img: 'assets/proyecto/tracking.png',
      status: statusProyectoEnum.public,
      demo: 'https://leonelhv.github.io/project-tracking-intro-component-master/',
      repositorio:
        'https://github.com/leonelhv/project-tracking-intro-component-master',
    },
    {
      name: 'Angular con Firebase',
      description:
        'Utilizando angular y firebase para el login de un página web ',
      img: 'assets/proyecto/angularfirebase.png',
      status: statusProyectoEnum.public,
      demo: 'https://angularfirebase.vercel.app/',
      repositorio: 'https://github.com/leonelhv/angularFirebase',
    },
    {
      name: 'Clone de Spotify',
      description:
        'Es una página hecha en angular el cual utiliza el login con firebase y la API de Spotify para mostrar las canciones.Aun sigue en desarrollo',
      img: 'assets/proyecto/spotify.png',
      status: statusProyectoEnum.inProcess,
      demo: '',
      repositorio: 'https://github.com/leonelhv/spotify-clone',
    },
  ];
}
