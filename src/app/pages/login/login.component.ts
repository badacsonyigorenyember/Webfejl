import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false  ;

  constructor(private router: Router, private authService: AuthService) {

  }


  ngOnInit(): void {
  }

  async login(){
    this.loading = true;

    if (this.email.value != null && this.password.value != null) {
      this.authService.login(this.email.value, this.password.value).then(cred => {
        this.router.navigateByUrl('/main');
        this.loading = false;
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      })
    }
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
