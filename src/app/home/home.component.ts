import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginWithGoogle(): void {
    const returnUrl = encodeURIComponent(
      window.location.origin + environment.endpoints.socialCallbackPath,
    );
    window.location.href = `${environment.apiBaseUrl}${environment.endpoints.authGoogleLogin}?returnUrl=${returnUrl}`;
  }
}
