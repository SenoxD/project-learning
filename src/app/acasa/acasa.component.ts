import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const h1Element = document.getElementById('pagina-html');
    if (h1Element) {
      h1Element.addEventListener('click', () => {
        this.navigateToPaginaHTML();
      });
    }
  }

  navigateToPaginaHTML(): void {
    const dataToSend = 'exemplu plm'; 
    this.router.navigate(['/pagina-html'], { state: { data: dataToSend } });
  }

}
