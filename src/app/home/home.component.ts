import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginWithGoogle(): void {
    const returnUrl = encodeURIComponent(
      window.location.origin + '/auth/social-callback',
    );
    window.location.href = `https://localhost:5001/auth/google/login?returnUrl=${returnUrl}`;
  }
}
