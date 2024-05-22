import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../Entity/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  CategoriaURL = environment.apiResrURL + '/api/categoria';
  constructor(private httpClient: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.CategoriaURL);
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.CategoriaURL}/${id}`);
  }

  createCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.CategoriaURL, Categoria);
  }

  updateCategoria(id: number, Categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(`${this.CategoriaURL}/${id}`, Categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.CategoriaURL}/${id}`);
  }
}