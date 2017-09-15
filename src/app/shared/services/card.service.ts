import { ApiError } from '../models/api-error.model';
import { Observable } from 'rxjs/Observable';
import { Card } from './../models/card.model';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CardService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/cards`;

  constructor(private http: Http) {
    super();
  }

  create(card: Card): Observable<Card> {
    return this.http.post(`${CardService.baseEndPoint}`, JSON.stringify(card), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  edit(card: Card): Observable<Card> {
    return this.http.put(`${CardService.baseEndPoint}/${card._id}`, JSON.stringify(card), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  move(id: number, from: string, to: string): Observable<Card> {
    const data = {
      from: from,
      to: to
    };

    return this.http.put(`${CardService.baseEndPoint}/${id}/move`, JSON.stringify(data), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  remove(id: number): Observable<boolean> {
    return this.http.delete(`${CardService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.status === 204)
      .catch(super.handleError);
  }
}
