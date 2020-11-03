import { Component, DoCheck, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit, DoCheck {
  logo ="assets/images/download.png";
  scrolled: boolean;
  
  constructor() {}

  ngOnInit() {
    this.scrolled = window.pageYOffset > 44;
  }

  ngDoCheck() {
  
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 44;
  }
}
