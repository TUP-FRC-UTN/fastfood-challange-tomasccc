import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../model/pedido';


@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

  pedido:Pedido=new Pedido();


  constructor(public pedidoService: PedidosService) {

   }

   onSubmit(form:NgForm){
    if(form.valid){
      this.pedido.number = Math.floor(Math.random() * 1000);
      this.pedido.date = new Date();
      this.pedidoService.addPedido(this.pedido);
    }else{
      alert('Formulario no valido');
    }
    }
}
