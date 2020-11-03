import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctors } from 'src/app/shared/interfaces/doctors';

@Component({
  selector: 'doctors-root',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent implements OnInit {
    doctor: Doctors;
    id: number;
    Doctors: Doctors[] = [
        { 
            name: 'doctors 1',
            paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
            id: 1,
            age: 26,
            image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
        },
        { 
            name: 'doctors 2',
            paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
            id: 2,
            age: 24,
            image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
        },
        { 
            name: 'doctors 3',
            paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
            id: 3,
            age: 38,
            image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
        }
    ]
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
        this.id = res.id;
      })
      
      this.doctor = this.Doctors.find(res => {
        return res.id == this.id;
      })
  }

}