import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements AfterViewInit, OnInit  {

  message: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/user', {
    withCredentials: true
    })
    .subscribe(
    (res: any) => {
    this.message = `Bine ai revenit, ${res.name}!`;
    },
    (err) => {
    this.message = "Nu esti logat!"
    }
    );
    }



    ngAfterViewInit(): void {
      const h1Element = document.getElementById('pagina-html');
      let imagine="C:\Users\valce\Desktop\angular\project-learning\src\assets\smth.jpg"
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