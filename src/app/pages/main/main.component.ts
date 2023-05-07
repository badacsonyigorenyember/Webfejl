import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../shared/services/property.service";
import {Property} from "../../shared/models/Property";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  properties: Array<Property> = [];

  constructor(private propService: PropertyService) {
  }

  ngOnInit(): void {
    this.propService.getAll().subscribe(properties => {
      this.properties = properties;
    }, error => {
      console.log(error);
    });
  }


}
