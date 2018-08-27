import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public girarBoton(){
    anime({
      targets: '#btn-menu',
      rotate: 360,
      easing: 'easeOutExpo',
      direction: 'alternate'
    });
  }

}
