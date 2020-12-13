import { LocalStorageService } from './../../shared/Storage/local-storage.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  logo ="assets/images/download.png";
  scrolled: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}

  ngOnInit() {
    this.scrolled = window.pageYOffset > 44;
  }

  logOut() {
    this.router.navigate(['core']);
    this.localStorageService.clearLocalStorage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 44;
  }
}
