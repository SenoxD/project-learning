import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { PaginaHTMLComponent } from './pagina-html/pagina-html.component';
import { GcontactComponent } from './gcontact/gcontact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AcasaComponent,
    ProfilComponent,
    HeaderComponent,
    PaginaHTMLComponent,
    GcontactComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
