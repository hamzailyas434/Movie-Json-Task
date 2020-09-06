import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FrontPageModule { }
