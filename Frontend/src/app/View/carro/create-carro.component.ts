import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/Entity/carro';
import { Categoria } from 'src/app/Entity/categoria';
import { Usuario } from 'src/app/Entity/usuario';
import { CarroService } from 'src/app/Service/carro.service';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-create-carro',
  templateUrl: './create-carro.component.html',
  styleUrls: ['./create-carro.component.css'],
})
export class CreateCarroComponent  implements OnInit {
  carro: Carro = { id: 0, marca: "", modelo: '', placa: "", color:"", categoriaId: null, usuarioId: null };
  categorias: Categoria[] = [];
  usuarios: Usuario[] = [];
  
  constructor(
    private carroService: CarroService,
    private usuarioService: UsuarioService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }


  ngOnInit() {
    this.loadUsuario();
    this.loadCategoria();
  }

  loadUsuario() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  loadCategoria() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  saveCarro() {
    this.carroService.createCarro(this.carro).subscribe(() => {
      this.router.navigate(['/allCarro']);
    });
  }
}