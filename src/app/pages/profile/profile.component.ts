import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";
import {Property} from "../../shared/models/Property";
import {PropertyService} from "../../shared/services/property.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user?: User;
  properties: Array<Property> = [];

  constructor(private userService: UserService, private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    console.log(typeof new Date().getTime());
    const u = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getUserById(u.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.error(error);
      }
    );
    this.propertyService.getPropertiesByUser(u.uid).subscribe(properties => {
      this.properties = properties;
    });
  }

  modify(id: string): void{

  }

  delete(id: string): void{
    this.propertyService.delete(id).then(_ => {
      console.log("siker");
    }).catch(error => {
      console.log(error);
    })

  }
}
