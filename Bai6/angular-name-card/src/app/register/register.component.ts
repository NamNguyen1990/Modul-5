import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 1, name: 'Lao'},
    {id: 1, name: 'Campodia'},
  ]

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(8)]),
    lastname: new FormControl('',[Validators.maxLength(12)]),
    email: new FormControl('',[Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required])
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  onSubmit() {
    console.log(this.contactForm.value);
    alert("Thanh Cong")
  }
}
