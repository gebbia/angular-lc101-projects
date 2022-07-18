import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Moon Knight Photos';
  image1 = 'https://upload.wikimedia.org/wikipedia/en/f/fd/Marc_Spector_39.jpg';
  image2 = 'https://static.wikia.nocookie.net/disney/images/a/a6/Moon_Knight_Profile.jpg';
  image3 = 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/ea/Moon_Knight_Poster_Textless.png';
  

  constructor() { }

  ngOnInit() {
  }

}

