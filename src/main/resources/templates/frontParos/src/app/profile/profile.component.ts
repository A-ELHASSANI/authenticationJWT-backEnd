import { Component, OnInit } from '@angular/core';
import { UserModule } from '../user/user.module';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserModule |any;
  isEditing: boolean = false;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.user = { ...this.authService.getUser() };
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    this.authService.updateUser(this.user);
    this.toggleEdit();
  }

}


/****************************************************************************************************** */
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthServiceService } from '../services/auth-service.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   profileForm: FormGroup | any;

//   constructor(private fb: FormBuilder, private authService: AuthServiceService) {}

//   ngOnInit(): void {
//     // const currentUser = this.authService.getCurrentUser();
//     this.profileForm = this.fb.group({
//       email: [{   disabled: true }], // Email is read-only
//       name: ['', Validators.required], // Editable name field
//       password: ['', [Validators.required, Validators.minLength(8)]] // Editable password field
//     });

//     // Load user data if available
//     const savedProfile = localStorage.getItem('userProfile');
//     if (savedProfile) {
//       this.profileForm.patchValue(JSON.parse(savedProfile));
//     }
//   }

//   onSubmit() {
//     if (this.profileForm.valid) {
//       console.log(this.profileForm.value); // Log form values to console
//       // Save profile changes to localStorage
//       localStorage.setItem('userProfile', JSON.stringify(this.profileForm.value));
//     }
//   }
// }
