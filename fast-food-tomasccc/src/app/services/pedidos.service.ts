import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  public pedidos:Pedido[] = [
    {id:1, number:1, name:"Tomas", description:"Hamburguesa", date:new Date()},
    {id:2, number:2, name:"Juan", description:"Pizza", date:new Date()},
    {id:3, number:3, name:"Pepe", description:"Hot Dog", date:new Date()},
    {id:4, number:4, name:"Maria", description:"Papas Fritas", date:new Date()}
  ];

  constructor() { }

  addPedido(pedido:Pedido){
    pedido.id = this.pedidos.length + 1;
    this.pedidos.push(pedido);
  }

  getPedidos(){
    return this.pedidos;
  }

  deletePedido(pedido:Pedido){
    this.pedidos = this.pedidos.filter(p => p !== pedido);
  }
}
