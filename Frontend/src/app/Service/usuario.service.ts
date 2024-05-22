import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Entity/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  UsuarioURL = environment.apiResrURL + '/api/usuario';
  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.UsuarioURL);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.UsuarioURL}/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.UsuarioURL, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.UsuarioURL}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.UsuarioURL}/${id}`);
  }
}