import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
myform2: any;

  ngOnInit(): void {

  }

  constructor(private formBuilder: FormBuilder) {
    this.myform2 = formBuilder.group({
      Fname:['',Validators.required],
      Sname:['',Validators.required],
      PhoneN:['',[Validators.required]],
      EmailC: ['', [Validators.email, Validators.required]],
      PassR: ['', [Validators.minLength(8), Validators.required]],
    });
  }

}

