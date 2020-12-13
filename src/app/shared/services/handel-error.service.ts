import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HandelErrorService {

  constructor() { }

  logError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     console.log(`client side ${error.error}`);
    } else {
      Swal.fire({
        icon: 'error',
        title: error.error,
        text: error.statusText,
      });
    }
    return throwError(`${error.statusText}`);
  }
}
