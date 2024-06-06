import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  myForm: any;

  loginError: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private shareService: ShareService, public auth: AuthServiceService) {
    this.myForm = formBuilder.group({
      EmailB: ['', [Validators.email, Validators.required]],
      Pass: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  onLogin() {
    if (this.myForm.valid) {
      const email = this.myForm.get('EmailB')?.value;
      const password = this.myForm.get('Pass')?.value;
      if (this.auth.login(email, password)) {

        this.router.navigate(['']);

      } else {
        this.loginError = true;
      }
    }
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.shareService.postData(this.myForm.value).subscribe(
        (response: any) => {
          console.log('Server responded with: ', response);
        },
        (error: any) => {
          console.log('An error occurred: ', error);
        }
      );
    }
  }

  ngOnInit(): void { }
}
