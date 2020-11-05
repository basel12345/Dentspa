import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallary-root',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  Gallary = [
    {
      name: 'Name 1',
      image: 'assets/images/ZGG_9736-1170x780.jpg'
    },
    {
      name: 'Name 2',
      image: 'assets/images/ZGG_9737-1170x780.jpg'
    },
    {
      name: 'Name 3',
      image: 'assets/images/ZGG_9736-1170x780.jpg'
    },
    {
      name: 'Name 4',
      image: 'assets/images/ZGG_9754-1170x780.jpg'
    },
    {
      name: 'Name 4',
      image: 'assets/images/ZGG_9760-1170x780.jpg'
    }
  ];
  constructor() {}
  ngOnInit() {
  }
}
