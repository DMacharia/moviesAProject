import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router) {}

  login(email: string, password: string) {
    if (email === 'danielhuios@gmail.com' && password === '12345') {
      return 200;
    } else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
