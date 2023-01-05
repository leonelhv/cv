import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, MainComponent, FooterComponent, HeroComponent],
})
export class ComponentsModule {}
