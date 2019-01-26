import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserSignupDetail } from './user-signup-detail';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  _url = "http://localhost:8093/AccountService/users/";
  constructor(private _http: HttpClient) { }

  saveUserSignup(user: UserSignupDetail){
    user.role = 1;
    user.status=true;
    console.log(user);
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
