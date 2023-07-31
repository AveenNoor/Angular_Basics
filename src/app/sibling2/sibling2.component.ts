import { Component } from '@angular/core';
import { S12Service } from '../s12.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  //Sibling Communication: Step 6 Creating Variable in child to store data in
  datafromS1 : string = '';

  constructor(private user2: S12Service){

    //Sibling Communication: Step 7 Subscribing to subject in the service to get data sent by sibling1
    this.user2.toObservable.subscribe((response)=>{
      if(!!response){
        this.datafromS1=response;
      }
    })
  }

  //Sibling Communication 2->1: Step 4 Creating a function to send data to sibling1
  sendDatatoS1(data:string):void{
    this.user2.getDataS2(data);
  }


}
