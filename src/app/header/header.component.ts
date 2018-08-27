import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _titulo: string;

  constructor() { this._titulo = 'Bienvenidos'; }

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public cambiarColordivCarousel(): void {
    $('#carousel-1');
  }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

}
