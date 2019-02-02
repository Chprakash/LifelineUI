import { StaticInjector } from '@angular/core/src/di/injector';

export class AddNewBusiness {
    constructor(
        private companyName: string,
        private businessType: number,
        private mobileNuber: number,
        private landlineNumber: number,
        private contactPersonName: String,
        private country: number,
        private state: number,
        private city: number,
        private area: number,
        private address: string,
        private zip: number,
        private landmark: string
    ){}
}