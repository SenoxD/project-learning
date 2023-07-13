import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from '../app/acasa/acasa.component';
import { ProfilComponent } from '../app/profil/profil.component';
import { HeaderComponent } from '../app/header/header.component';
import { PaginaHTMLComponent } from './pagina-html/pagina-html.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', 
  redirectTo: 'Acasa', 
  pathMatch: 'full' },
  { path: 'Acasa',  
  component:AcasaComponent
 },

    { path: 'Profil', 
    component: ProfilComponent
   },

    {
      component: HeaderComponent,
      path: 'Header'
    },
    { path: 'acasa',  
    component:AcasaComponent
   },
   { path: 'pagina-html', 
   component: PaginaHTMLComponent },

   {
    path:'register', component:RegisterComponent
   }

  ];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
