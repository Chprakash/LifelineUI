import { Component, OnInit } from '@angular/core';
import { UserSignupDetail } from './user-signup-detail';
import { UserSignupService } from './user-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private _userSignupService: UserSignupService,
    private router : Router) { }
  errorMessage = "";  
 

  ngOnInit() {
  }
  private userSignupDetail = new UserSignupDetail("","","","",1,false);

  onSubmit(){
    this._userSignupService.saveUserSignup(this.userSignupDetail)
    .subscribe(
      data => {
        console.log('Success!', data),
        this.router.navigate(['./signin']);
      },
      error => this.errorMessage=error.statusText
    )
    console.log(this.errorMessage)
    console.log(this.userSignupDetail);
  }
  
}
