import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickNavItem() {
    if(this.navVisible) {
      this.navVisible = false;
    }
  }

}
