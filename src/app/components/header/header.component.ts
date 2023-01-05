import { Component, Input } from '@angular/core';

interface seccion {
  path: string;
  texto: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() secciones!: seccion[];
}
