import { Component, OnInit } from '@angular/core';
import { AddNewBusiness } from './add-new-business';
import { BusinessTypeService } from './business-type.service';
import { RegionService } from './region.service';
import { IRegion } from "./IRegion";
import { ICountry } from './country';

@Component({
  selector: 'app-add-new-business',
  templateUrl: './add-new-business.component.html',
  styleUrls: ['./add-new-business.component.css']
})
export class AddNewBusinessComponent implements OnInit {

  public businessTypes = [];
  public iRegion : IRegion;
  public countries :ICountry[];
  
  private addNewBusiness = new AddNewBusiness("",null,null,null,"",null,null,null,null,"",null,"");
  constructor(private _businessTypeService: BusinessTypeService,
    private _regionService: RegionService) { }

  ngOnInit() {
    this._businessTypeService.getBusinessTypes()
      .subscribe(
        data => {
          console.log('Success!', data),
          this.businessTypes = data,
          console.log('Testing', this.businessTypes);
        });
    
    this._regionService.getCountries()
      .subscribe(
        data => {
          console.log('Success!', data),
          this.iRegion = data,
          this.countries = this.iRegion.countries,
          console.log('Countries', this.countries);
        });
  }
}
