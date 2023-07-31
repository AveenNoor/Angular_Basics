import { Component } from '@angular/core';
import { S12Service } from '../s12.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {

  //Sibling Communication 2->1: Step 6 Creating a a variable to store data from sibling 2 in
  datafromS2 : string ='';

  constructor(private user1:S12Service){

    //Sibling Communication 2->1: Step 7 Subscribing to subject in service12 to get data from sibling2
    this.user1.toObservable1.subscribe((response)=>{
      if(!!response){
        this.datafromS2=response;
      }
    })

  }

  //Sibling Communication: Step 4 Create function to send data from sibling 1->service12
  sendDataS12(data:string):void {
    this.user1.getDataS1(data);
  }
}
