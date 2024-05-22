import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Categoria } from 'src/app/Entity/categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css'],
})
export class CreateCategoriaComponent  implements OnInit {
  nombre!: string;
  descripcion!: string;
  
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  onCreate(): void {
    const categoria = new Categoria(this.nombre, this.descripcion); 
    this.categoriaService.createCategoria(categoria).subscribe(
      data => {
        this.router.navigate(['allCategoria']); 
      },
      err => {
        
      }
    );
  }
}