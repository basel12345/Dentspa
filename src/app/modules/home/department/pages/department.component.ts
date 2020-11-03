import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/shared/interfaces/department';

@Component({
  selector: 'department-root',
  templateUrl: './department.component.html',
//   styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  id: number;
  Department: Department[] = [
    { 
        name: 'Orthodontics',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
        id: 1,
        image: 'assets/images/download.jpg'
    },
    { 
        name: 'Theth load',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
        id: 2,
        image: 'assets/images/download.jpg'
    },
    { 
        name: 'Extractions',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
        id: 3,
        image: 'assets/images/download.jpg'
    },
    { 
        name: 'Extractions',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
        id: 4,
        image: 'assets/images/download.jpg'
    }
]
  depart: Department;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
    
    this.depart = this.Department.find(res => {
      return res.id == this.id;
    })
  }
}