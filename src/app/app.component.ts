import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { routerAnimation } from './Object/Animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    routerAnimation
  ]
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  title = 'Digitec School';
  getDepth(outlet:any){
    return outlet.activatedRouteData['depth'];
  }
}
