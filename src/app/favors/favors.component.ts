import { Component } from '@angular/core';

@Component({
  selector: 'favors',
  templateUrl: './favors.component.html',
  styleUrls: ['./favors.component.css'],
})
export class FavorsComponent {
  personYouOwe: any;
  itemType: any;
  comments: string;
  favors: any;
  favorObj: any;

  constructor() {
    this.comments = '';
    this.favors = [];
  }

  addFavor(event) {
    this.favorObj = {
      personYouOwe: this.personYouOwe,
      itemType: this.itemType,
      comments: this.comments,
      completed: false,
    };
    this.favors.push(this.favorObj);
    this.comments = '';
    event.preventDefault();
  }

  deleteFavor(index) {
    this.favors.splice(index, 1);
  }

  deleteSelectedFavors() {
    //need ES5 to reverse loop in order to splice by index
    for (var i = this.favors.length - 1; i > -1; i--) {
      if (this.favors[i].completed) {
        this.favors.splice(i, 1);
      }
    }
  }
}
