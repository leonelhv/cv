import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
    SobreMiComponent,
    TecnologiasComponent,
    ProyectosComponent,
    ContactoComponent,
    LogoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
    SobreMiComponent,
    TecnologiasComponent,
    ProyectosComponent,
    ContactoComponent,
  ],
})
export class ComponentsModule {}
