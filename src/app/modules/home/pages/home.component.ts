import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/interfaces/department';
import { Doctors } from 'src/app/shared/interfaces/doctors';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cover='assets/images/PennSmiles-Mobile-Dental-Clinic--e1472182752312.jpg';
  aboutUS ='assets/images/Layer-1200.png';
  background ='assets/images/Rectangle-827-copy-2.jpg';
  cardiology ='assets/images/cardiology.png';
  neurology ='assets/images/neurology.png';
  oncology ='assets/images/oncology.png';
  chemistry ='assets/images/chemistry.png';

  Department: Department[] = [
    {
        name: 'Orthodontics',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
        id: 1,
        image: 'assets/images/download.jpg'
    },
    {
        name: 'Theth load',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
        id: 2,
        image: 'assets/images/download.jpg'
    },
    {
        name: 'Extractions',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
        id: 3,
        image: 'assets/images/download.jpg'
    },
    {
        name: 'Extractions',
        paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
        id: 4,
        image: 'assets/images/download.jpg'
    }
]
Doctors: Doctors[] = [
  {
      name: 'doctors 1',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
      id: 1,
      age: 26,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  },
  {
      name: 'doctors 2',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
      id: 2,
      age: 24,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  },
  {
      name: 'doctors 3',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the card',
      id: 3,
      age: 38,
      image: 'assets/images/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg'
  }
]
  constructor() {}

  ngOnInit() {

  }
}
