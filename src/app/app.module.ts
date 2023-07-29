import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonasComponent } from './components/personas/personas.component';
import { AutomovilesComponent } from './components/automoviles/automoviles.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PlanesPersonasComponent } from './components/planes-personas/planes-personas.component';
import { PlanesAutomovilesComponent } from './components/planes-automoviles/planes-automoviles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonasComponent,
    AutomovilesComponent,
    QuienesSomosComponent,
    PlanesPersonasComponent,
    PlanesAutomovilesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
