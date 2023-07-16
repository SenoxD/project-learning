import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = false

  constructor(private http:HttpClient){}

  ngOnInit():void{
    Emitters.authEmitter.subscribe((auth:boolean) =>{
      this.authenticated = auth
    })

  }

  logout(): void {
    this.http.post('http://localhost:5000/api/logout',{}, { withCredentials: true })
      .subscribe(() => this.authenticated = false)
  }
  

}