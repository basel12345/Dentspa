import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'read-more-root',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  Implants="assets/images/Implants.jpg";
  celebritySmile="assets/images/celebrity-smile.jpg"
  constructor() {}

  ngOnInit() {

  }
}