import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  username: string | undefined;
  email: string | undefined;
  firstName?: string;
  lastName?: string;
  password: string | undefined;
  phoneNumber: string | undefined;
  }

