import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IRegion } from "./IRegion";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private getCountries_url: string = "http://localhost:8093/AccountService/regions";
  private getStates_url: string = "http://localhost:8093/AccountService/regions?countryId=";
  private getCities_url: string = "http://localhost:8093/AccountService/regions?stateId=";
  private getAeras_url: string = "http://localhost:8093/AccountService/regions?cityId=";
  private getZips_url: string = "http://localhost:8093/AccountService/regions?areaId=";

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<IRegion>(this.getCountries_url);
  }

  getStates(countryId : number){
    return this.http.get<IRegion>(this.getStates_url+countryId)
  }

  getCities(stateId : number){
    return this.http.get<IRegion>(this.getCities_url+stateId)
  }

  getAreas(cityId : number){
    return this.http.get<IRegion>(this.getAeras_url+cityId)
  }

  getZips(areaId : number){
    return this.http.get<IRegion>(this.getZips_url+areaId)
  }
}
