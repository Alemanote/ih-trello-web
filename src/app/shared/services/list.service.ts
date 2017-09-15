import { ApiError } from '../models/api-error.model';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { List } from '../models/list.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable()
export class ListService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/lists`;

  private lists: Array<List> = [];

  constructor(private http: Http) {
    super();
  }

  getAll(): Observable<Array<List>> {
    return this.http.get(ListService.baseEndPoint, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  create(title: string): Observable<List> {
    const data = {
      title: title
    };
    return this.http.post(`${ListService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  edit(list: List): Observable<List> {
    return this.http.put(`${ListService.baseEndPoint}/${list._id}`, JSON.stringify(list), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  remove(id: number): Observable<boolean> {
    return this.http.delete(`${ListService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.status === 204)
      .catch(super.handleError);
  }

}
