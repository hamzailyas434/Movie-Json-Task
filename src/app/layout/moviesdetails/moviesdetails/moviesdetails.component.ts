import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
  userType:any;
  constructor(private _location: Location) { }

  ngOnInit() {
    this.userType = JSON.parse(localStorage.getItem('userData'));
   
  }
  backClicked() {
    this._location.back();
  }
}
