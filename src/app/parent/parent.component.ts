import { Component, OnInit,Input,Output } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
   receivedParentMessage:string;
   messageToSendParent:string='';

 constructor(private formBuilder:FormBuilder)
  {

  }
  ngOnInit() {
   
  }
  SendToChild(){
    this.messageToSendParent="Hello Child. How Are You?";
  }
  getMessage(message:string){

    
    
    this.receivedParentMessage=message;
  }

}