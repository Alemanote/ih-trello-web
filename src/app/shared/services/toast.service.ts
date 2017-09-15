import { ApiError } from './../models/api-error.model';
import { ToastsManager } from 'ng2-toastr';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class ToastService {

  constructor(private toastsManager: ToastsManager) {}

  setRootViewContainerRef(vcr: ViewContainerRef) {
    this.toastsManager.setRootViewContainerRef(vcr);
  }

  onSuccess(message: string = 'Success!') {
    this.toastsManager.success(message, 'Yayy!');
  }

  onError(apiError: ApiError = { message: 'An error ocurred' }) {
    this.toastsManager.error(apiError.message, 'Oops :(');
  }
}
