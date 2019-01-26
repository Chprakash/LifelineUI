import { Component, OnInit } from '@angular/core';
import { UserSigninDetail } from './user-signin-detail';
import { UserSigninService } from './user-signin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _userSigninService : UserSigninService,
    private router : Router) { }
  private userSigninDetail = new UserSigninDetail("","");
  errorMessage = "";
  ngOnInit() {
  }

  onSubmit(){
    this._userSigninService.siginUser(this.userSigninDetail)
    .subscribe(
      data => {
        console.log('Success!', data),
        this.router.navigate(['./dashBord']);
    },
      error => this.errorMessage=error.statusText
    )
    console.log(this.errorMessage)
    console.log(this.userSigninDetail);
  }

}
