import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PropertyService} from "../../shared/services/property.service";
import {Property} from "../../shared/models/Property";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent {

  propertyForm = new FormGroup({
    userId: new FormControl,
    city: new FormControl,
    address: new FormGroup({
      street: new FormControl,
      number: new FormControl
    }),
    size: new FormControl,
    dateOfBuild: new FormControl(new Date)
  });

  constructor(private propertyService: PropertyService, private router: Router,
              private location: Location) {
  }

  onSubmit(){
    if(this.propertyForm.valid){
      this.propertyForm.get('userId')?.setValue((JSON.parse(localStorage.getItem('user') as string) as firebase.default.User).uid);
        this.propertyService.create(this.propertyForm.value as Property).then(_ => {
          this.router.navigateByUrl('/profile');
        }).catch(error => {
          console.error(error);
        })
      }
    }

    goBack(){
      this.location.back()
    }

}
