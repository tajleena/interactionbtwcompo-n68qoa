import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  childMsgsFormGroup: FormGroup;
  receivedParentMessage: any;
  messageToSendParent: string = "";
  @Output() messageToEmit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.childMsgsFormGroup = this.formBuilder.group({
      childmsgs: this.formBuilder.array([])
    });
  }
  SendToChild() {
    const msg = this.childMsgsFormGroup.controls.childmsgs as FormArray;
    msg.push(
      this.formBuilder.group({
        message: ""
      })
    );
  }
  submit() {
    const msg = this.childMsgsFormGroup.controls.childmsgs as FormArray;
    this.messageToSendParent=msg.value;
    console.log(msg.value);
  }
  getMessage(message: any) {
    this.receivedParentMessage = message;
  }
}
