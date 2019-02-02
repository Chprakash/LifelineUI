import { Component, OnInit } from '@angular/core';
import { AddNewBusiness } from './add-new-business';
import { BusinessTypeService } from './business-type.service';
import { RegionService } from './region.service';
import { IRegion } from "./IRegion";
import { ICountry } from './country';
import { IState } from './state';
import { ICity } from './city';
import { IArea } from './area';
import { IZip } from './zip';

@Component({
  selector: 'app-add-new-business',
  templateUrl: './add-new-business.component.html',
  styleUrls: ['./add-new-business.component.css']
})
export class AddNewBusinessComponent implements OnInit {

  private businessTypes = [];
  private iRegion : IRegion;
  private countries :ICountry[];
  private states : IState[];
  private cities : ICity[];
  private areas : IArea[];
  private zips: IZip[];

  
  private addNewBusiness = new AddNewBusiness("",null,null,null,"",null,null,null,null,"",null,"");
  constructor(private _businessTypeService: BusinessTypeService,
    private _regionService: RegionService) { }

  ngOnInit() {
    this._businessTypeService.getBusinessTypes()
      .subscribe(
        data => {
          this.businessTypes = data
        });
    
    this._regionService.getCountries()
      .subscribe(
        data => {
          this.iRegion = data,
          this.countries = this.iRegion.countries
        });
  }

  getStates(id : number){
    this._regionService.getStates(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.states = this.iRegion.states;
        });
  }

  getCities(id : number){
    this._regionService.getCities(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.cities = this.iRegion.cities;
        });
  }

  getAreas(id : number){
    this._regionService.getAreas(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.areas = this.iRegion.areas;
        });
  }

  getZips(id : number){
    this._regionService.getZips(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.zips = this.iRegion.zips;
        });
  }
}
