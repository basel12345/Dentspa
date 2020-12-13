import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us-root',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  Implants="assets/images/Implants.jpg";
  celebritySmile="assets/images/celebrity-smile.jpg"
  constructor() {}

  ngOnInit() {

  }
}
