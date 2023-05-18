import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  loginForm: FormGroup;
 

  constructor(private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder,
    ) { 
      this.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
      }) as FormGroup<{
        username: FormControl<string>;
        password: FormControl<string>;
      }>;
    }


  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginForm.value)
    if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      this.router.navigate(['/home']);
      
    } else {
      this.router.navigate(['/login']);
    }
    this.loginForm.reset();
  }

}
