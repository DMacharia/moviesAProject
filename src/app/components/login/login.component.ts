import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  errormssg = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.email.trim().length === 0) {
      this.errormssg = 'Email is required';
    } else if (this.password.trim().length === 0) {
      this.errormssg = 'Password is required';
    }

    let res = this.auth.login(this.email, this.password);
    if (res === 200) {
      this.router.navigate(['/home']);
    } else if (res === 403) {
      this.errormssg = 'Invalid credentials'
    }
  }
}
