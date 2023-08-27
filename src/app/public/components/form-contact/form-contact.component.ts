import { Component, OnInit  } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
contactForm: FormGroup;
  isSubmit: boolean = true;
  submitMessage: string = "";


  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.contactForm = this.formBuilder.group({
      firstName:[null, Validators.required ],
      email:[null, Validators.required, Validators.email],
      message:[null, Validators.required],
      subject: [null, Validators.required]
    })
  }

  submitData(value: any) {
    console.log(value)
    this.isSubmit = true;
    this.submitMessage = "Formulaire envoyé!";
    setTimeout(()=> {
    this.isSubmit = false;
    }, 8000)  
  }     
}
