import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Entity/categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css'],
})
export class UpdateCategoriaComponent implements OnInit {
  id!: number;
  categoria!: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCategoria();
  }  

  onUpdate(): void {
    this.categoriaService.updateCategoria(this.id, this.categoria).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

  getCategoria(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.categoriaService.getCategoriaById(this.id).subscribe(
      data => {
        this.categoria = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }
}