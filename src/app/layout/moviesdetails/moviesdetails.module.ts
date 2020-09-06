import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesdetailsRoutingModule } from './moviesdetails-routing.module';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';


@NgModule({
  declarations: [MoviesdetailsComponent],
  imports: [
    CommonModule,
    MoviesdetailsRoutingModule
  ]
})
export class MoviesdetailsModule { }
