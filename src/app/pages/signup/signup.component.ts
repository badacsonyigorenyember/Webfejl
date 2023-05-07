import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }),
    mobile: new FormControl('')

  });


  constructor(private location: Location, private authService: AuthService, private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
      this.authService.signUp(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value as string,
          name: {
            firstName: this.signUpForm.get('name.firstName')?.value as string,
            lastName: this.signUpForm.get('name.lastName')?.value as string
          },
          mobile: this.signUpForm.get('mobile')?.value as string
        }

        this.userService.create(user).then(_ => {
          console.log("sikeres user létrehozás");
        }).catch(error => {
          console.log(error);
        });

      }).catch(error => {
        console.log(error);
      })
    this.router.navigateByUrl('/main');
  }

  goBack(){
    this.location.back();
  }

}
