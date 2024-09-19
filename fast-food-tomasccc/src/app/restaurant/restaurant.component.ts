import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { PointOfSellComponent } from '../point-of-sell/point-of-sell.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfSellComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  constructor(public pedidoService: PedidosService) { }

}
