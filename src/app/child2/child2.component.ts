import { Component,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  //Child 2 to Parent: Step3 Output to send data to parent through an event emitter
  @Output() sendDatatoP : EventEmitter<string> = new EventEmitter();

  //Child 2 to Parent: Step4 Sending an initial value to parent
  ngOnInit(): void { 
    this.sendDatatoP.emit('Waiting for data from Child2...')
  }

  //Child 2 to Parent: Step5 Function to recieve value to send to parent, from button click
  clickevent2(data:string):void{
    this.sendDatatoP.emit(data);
  }



}
