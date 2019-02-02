import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IBusinessType } from './business-type';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypeService {

  private _url: string = "http://localhost:8093/AccountService/businesstypes"
  constructor(private http: HttpClient) { }

  getBusinessTypes(){
    return this.http.get<IBusinessType[]>(this._url)
  }
}
