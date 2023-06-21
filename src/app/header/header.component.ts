import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuFolded: boolean = false;

  openMenu(value: any) {
    this.menuFolded = !this.menuFolded;
    // this.dialog.open(HeaderComponent, {})
  }
}
