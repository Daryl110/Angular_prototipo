
import { Component, OnInit } from '@angular/core';

export const products = $.ajax({
  url: './assets/json/productos.json',
  dataType: 'json',
  async: false,
  success: function (data) {
    console.log(data);
  },
  error: function (err, data) {
    console.log(err, data);
  }
}).responseJSON.datos;

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {

  private _productos = products;
  private _total: number = 0;

  constructor() {
    console.log(this._productos);
  }

  public get productos() {
    return this._productos;
  }

  public set productos(value) {
    this._productos = value;
  }

  public get total(): number {
    return this._total;
  }

  public set total(value: number) {
    this._total = value;
  }

  ngOnInit() {

  }

  public cambiarChecked(id) {
    this._productos.forEach(producto => {
      if (producto.value + '_id' === id) {
        producto.checked = !producto.checked;
        if (producto.checked) {
          this._total += producto.price;
        } else {
          this._total -= producto.price;
        }
      }
    });
  }

  public verComprados() {
    this._productos.forEach(producto => {
      if (!producto.checked) producto.visible = false;
      if (producto.checked) {
        producto.visible = true;
        $('#' + producto.value + '_id').prop('checked', true);
      }
    });
  }

  public verDisponibles() {
    this._productos.forEach(producto => {
      if (!producto.checked) producto.visible = true;
      if (producto.checked) {
        producto.visible = false;
        $('#' + producto.value + '_id').prop('checked', true);
      }
    });
  }

  public verTodos() {
    this._productos.forEach(producto => {
      producto.visible = true;
      if (producto.checked) {
        $('#' + producto.value + '_id').prop('checked', true);
      }
    });
  }

}
