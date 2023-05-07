import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{

  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter<boolean>();


  menuSwitch(){
    this.selectedPage.emit(this.currentPage);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  close(logout?: boolean){
    if(logout === true){
      this.onLogout.emit(logout);
    }
    this.onCloseSideNav.emit(true);
  }

}
