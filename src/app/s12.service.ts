import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class S12Service {

  //Sibling Communication 1->2: Step 1 Creating a Subject 
  private s12Data : BehaviorSubject<string> = new BehaviorSubject('Waiting for Data...');
  //Sibling Communication 2->1: Step 1 Creating a Subject 
  private s21Data : BehaviorSubject<string> = new BehaviorSubject('Waiting for Data...');

  constructor() { }

  //Sibling Communication 1->2: Step 2 Converting data to observable
  get toObservable(){
    return this.s12Data.asObservable();
  }

  //Sibling Communication 2->1: Step 2 Converting to observable
  get toObservable1(){
    return this.s21Data.asObservable();
  }

  //Sibling Communication 1->2: Step 3 Recieving data from sibling 1
  getDataS1(data:string):void {
    this.s12Data.next(data);
  }

  //Sibling Communication 2->1: Step 3 Recieving data from sibling 2
  getDataS2(data:string):void {
    this.s21Data.next(data);
  }

}
