import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Iron Man', 'Iron Man 2', 'Iron Man 3', 'The Goonies'];

   constructor() { }

   ngOnInit() {
   }

}
