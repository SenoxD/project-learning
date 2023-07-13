import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { PaginaHTMLComponent } from './pagina-html/pagina-html.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HtmlIncepatoriComponent } from './html-incepatori/html-incepatori.component';



@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    ProfilComponent,
    HeaderComponent,
    PaginaHTMLComponent,
    LoginComponent,
    RegisterComponent,
    DropdownListComponent,
    HtmlIncepatoriComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
