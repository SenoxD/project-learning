import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from '../app/acasa/acasa.component';
import { ProfilComponent } from '../app/profil/profil.component';
import { AboutComponent } from '../../src/app/about/about.component';
import { HeaderComponent } from '../app/header/header.component';


const routes: Routes = [
  { path: '',  
  component:AcasaComponent
 },

    { path: 'Profil', 
    component: ProfilComponent
   },

    { path: 'About',
     component: AboutComponent 
    },
    {
      component: HeaderComponent,
      path: 'Header'
    }

  ];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
