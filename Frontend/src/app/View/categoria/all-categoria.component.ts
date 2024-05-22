import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Entity/categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-all-categoria',
  templateUrl: './all-categoria.component.html',
  styleUrls: ['./all-categoria.component.css'],
})
export class AllCategoriaComponent  implements OnInit {
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService, private toast: ToastrService) { }

  ngOnInit() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(
      data => {
        this.loadPedidos();
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
}