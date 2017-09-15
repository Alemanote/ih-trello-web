import { Sortable } from './../models/Sortable.intefaze';
import { ApiError } from '../models/api-error.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class BaseApiService {
  protected static baseApi = environment.base_api;
  protected static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  protected static defaultOptions = new RequestOptions({ headers: BaseApiService.defaultHeaders });
  protected static defaultSort = ['position', 'updatedAt'];

  constructor() {}

  protected sortBy(items: Array<Sortable>, keys: Array<string>): Array<Sortable> {
    return _.orderBy(items, keys);
  }

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
