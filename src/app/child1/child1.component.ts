import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  //Parent to Child 1: Step4 Input to recieve value from parent
  @Input() DatafromP :string ='';

}
