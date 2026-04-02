import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-callback',
  templateUrl: './social-callback.component.html',
  styleUrls: ['./social-callback.component.scss'],
})
export class SocialCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      const email = params['email'];
      const name = params['name'];
      const error = params['error'];

      if (error) {
        this.router.navigate(['']);
        return;
      }

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email ?? '');
        localStorage.setItem('userName', name ?? '');

        this.router.navigate(['/success']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
