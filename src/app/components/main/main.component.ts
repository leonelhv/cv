import { Component, Input } from '@angular/core';
interface seccion {
  path: string;
  texto: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() secciones!: seccion[];
}
