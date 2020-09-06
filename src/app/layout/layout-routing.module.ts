import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
    {path:'',redirectTo:'front-page'},
    {path:'front-page',loadChildren:()=>import('./front-page/front-page.module').then(m=> m.FrontPageModule)},
    {path:'moviesdetail',loadChildren:()=>import('./moviesdetails/moviesdetails.module').then(m=> m.MoviesdetailsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
