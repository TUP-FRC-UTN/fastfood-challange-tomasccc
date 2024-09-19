import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../model/pedido';


@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {
  pedido:Pedido = new Pedido();

  constructor(public pedidoService: PedidosService) {

   }
}
