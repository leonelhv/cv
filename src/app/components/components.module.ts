import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
    SobreMiComponent,
    TecnologiasComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
    SobreMiComponent,
    TecnologiasComponent,
  ],
})
export class ComponentsModule {}
