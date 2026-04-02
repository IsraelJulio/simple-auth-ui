import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {}

  loginWithGoogle() {
    return this.client.get('https://localhost:5001/auth/login');
  }
}
