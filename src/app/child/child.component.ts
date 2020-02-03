import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  parentMsgsFormGroup:FormGroup;
  @Input() receivedParentMessage:any;
  @Output() messageToEmit= new EventEmitter <any>();
  
  ind:number=0;
  constructor(private formBuilder:FormBuilder)
  {

  }

  ngOnInit() {
     this.parentMsgsFormGroup=this.formBuilder.group({
     parentsmsgs:this.formBuilder.array([])
    })
  }
  SendToParent(){   

    const msg=this.parentMsgsFormGroup.controls.parentsmsgs as FormArray;
    msg.push(this.formBuilder.group({
      message:''
      
    }));
    
  }

  submit()
  {
    const msg=this.parentMsgsFormGroup.controls.parentsmsgs as FormArray;   
     this.messageToEmit.emit(msg.value);
    //   console.log(msg.value[this.ind].message);
    //   console.log(msg.value);
    //  this.ind=this.ind+1;
    
  }
  getMessage(message:any){
    this.receivedParentMessage=message;
  }

}