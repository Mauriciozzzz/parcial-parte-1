import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carro } from 'src/app/Entity/carro';
import { CarroService } from 'src/app/Service/carro.service';

@Component({
  selector: 'app-all-pedido',
  templateUrl: './all-carro.component.html',
  styleUrls: ['./all-carro.component.css'],
})
export class AllCarroComponent  implements OnInit {
  carros: Carro[] = [];
  constructor(private carroService: CarroService, private toast: ToastrService) { }

  ngOnInit() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.carroService.getCarros().subscribe(data => {
      this.carros = data;
    });
  }

  deleteProducto(id: number) {
    this.carroService.deleteCarro(id).subscribe(
      data => {
        this.loadPedidos();
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
  );
  }
}