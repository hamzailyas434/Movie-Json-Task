import { Component, OnInit } from '@angular/core';
import movie from 'src/app/shared/Models/Movies/moviedata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  data=movie;
  movies:any;
  search:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(movie)
    let result = this.data.filter(obj => {
      return obj.name;
    });
    console.log(result);
    this.movies = JSON.stringify(this.data);
  }
  
  movi(index){
    this.movies = this.data[index];
   localStorage.setItem('userData',JSON.stringify(this.movies))
     this.router.navigate(['/moviesdetail']);
  }
  //search Movie
  onSearchKeyUp() {
    this.data = JSON.parse(this.movies);
    if(this.search !== undefined && this.search !== ""){
      this.data = this.data.filter(it => it.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  }
  }
}
