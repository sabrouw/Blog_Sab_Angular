import { Component , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {
  showFiller: boolean = false;
  disabled = new FormControl(false);
  isSidebarOpen: boolean = false;
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen
  }
}



