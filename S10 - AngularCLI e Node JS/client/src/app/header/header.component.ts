import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carrelloQta = 0;

  constructor() { }

  ngOnInit(): void {
    let carrelloSalvato = localStorage.getItem('Carrello');
    if (carrelloSalvato) {
      let carrelloSalvato2 = JSON.parse(carrelloSalvato)
      this.carrelloQta = carrelloSalvato2?.length;
    }
  }


}
