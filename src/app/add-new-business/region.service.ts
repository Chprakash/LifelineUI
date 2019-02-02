import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IRegion } from "./IRegion";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private _url: string = "http://localhost:8093/AccountService/regions"
  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<IRegion>(this._url)
  }
}
