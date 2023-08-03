import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ["./navbar.component.scss"],



})
export class NavbarComponent {
  showFiller = false;
  disabled = new FormControl(false);
  iconOpen: boolean = false;
  iconClose: string = '../../../../assets/images/close-door-icon.svg';
  iconInitial: string = this.iconClose;

  changeIcon() {
  this.iconOpen = !this.iconOpen;
  if (this.iconOpen) {
    this.iconClose = '../../../../assets/images/open-door-icon.svg ';
  } else {
    this.iconClose = this.iconInitial;
  }
}
}
