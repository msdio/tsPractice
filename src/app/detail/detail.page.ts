import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  receivedData = {
    "volumeInfo": {
      "title": "Star Wars: Return of the Jedi (Episode VI)",
      "authors": [
          "George Lucas"
      ],
      "description": "Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.",
      "imageLinks": {
          "thumbnail": "../../assets/images/starwars3.jpg"
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
