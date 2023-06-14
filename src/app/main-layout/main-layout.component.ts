import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  menuFolded: boolean = false;
  constructor() {
  }

  ngOnInit() :void {

  }
  openMenu(value: any) {
    this.menuFolded = !this.menuFolded;
    // this.dialog.open(HeaderComponent, {})
  }
}
