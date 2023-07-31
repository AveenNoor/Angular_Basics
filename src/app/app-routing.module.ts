import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sibling1Component} from './sibling1/sibling1.component';
import { Sibling2Component} from './sibling2/sibling2.component';
import {DisplaySiblingsComponent} from './display-siblings/display-siblings.component';

const routes: Routes = [
  {path:'sibling1', component:Sibling1Component},
  {path:'sibling2', component:Sibling2Component},
  {path:'display12',component:DisplaySiblingsComponent},
  {path:'not-found',component:DisplaySiblingsComponent},
  {path:'**', redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
