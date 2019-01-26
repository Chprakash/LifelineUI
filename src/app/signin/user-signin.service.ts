import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserSigninDetail } from './user-signin-detail';

@Injectable({
  providedIn: 'root'
})
export class UserSigninService {

  _url = "http://localhost:8093/AccountService/users/login";
  constructor(private _http: HttpClient) { }

  siginUser(user: UserSigninDetail){
    console.log(user);
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
