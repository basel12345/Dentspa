import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  url: string;
  constructor(public router: Router) {
    this.url = this.router.url;
  }

  ngOnInit() {
    this.url = this.router.url;
  }

  ngDoCheck() {
    this.url = this.router.url;
  }

  get checkUrl() {
    if(this.url === '/' || this.url === '/core' || this.url === '/core/login' || this.url === '/core/signup') {
      return false;
    }
    return true;
  }
}
