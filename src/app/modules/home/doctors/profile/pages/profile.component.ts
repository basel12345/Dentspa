import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/shared/interfaces/doctors';

@Component({
  selector: 'profile-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id: any;
  doctor: Doctors[];
  Doctors: Doctors[] = [
    {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 1,
      age: 26,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
    },
    {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 2,
      age: 24,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
    },
    {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 3,
      age: 38,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
    },
    {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 4,
      age: 26,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  },
  {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 5,
      age: 24,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  },
  {
      name: 'Dr: Jack',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card',
      id: 6,
      age: 38,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(this.id)
    });

    this.doctor = this.Doctors.filter(res => {
      return res.id == this.id;
    });

    console.log(this.doctor)
  }

}
