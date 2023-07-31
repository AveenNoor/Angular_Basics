import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'week12';

  //Parent to Child 1: Step1 Creating a variable to send
  p2c1 :string ='';

  //Child 2 to Parent: Step2 Function to recieve data from child1
  c22p :string='';

  //Constructor
  constructor(private router:Router){}

  //Parent to Child 1: Step3 Sending value to child upon click event
  clickeventP(data:string):void {
    this.p2c1=data;
  }

  //Child 2 to Parent: Step2 Function to recieve data from child1
  recvDatafromC2(data:string):void {
    this.c22p=data;
  }

}
