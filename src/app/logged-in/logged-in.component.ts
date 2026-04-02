import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
})
export class LoggedInComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loginWithGoogle().subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
  logout(): void {
    localStorage.clear();

    window.location.href = `${environment.apiBaseUrl}${environment.endpoints.authLogout}`;
  }
}
