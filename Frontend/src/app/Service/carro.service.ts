import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carro } from '../Entity/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  carroURL = environment.apiResrURL + '/api/carro';
  constructor(private httpClient: HttpClient) { }

  getCarros(): Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(this.carroURL);
  }

  getCarroById(id: number): Observable<Carro> {
    return this.httpClient.get<Carro>(`${this.carroURL}/${id}`);
  }

  createCarro(carro: Carro): Observable<Carro> {
    return this.httpClient.post<Carro>(this.carroURL, carro);
  }

  updateCarro(id: number, carro: Carro): Observable<Carro> {
    return this.httpClient.put<Carro>(`${this.carroURL}/${id}`, carro);
  }

  deleteCarro(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.carroURL}/${id}`);
  }
}