import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialCallbackComponent } from './social-callback/social-callback.component';
import { HomeComponent } from './home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

const routes: Routes = [
  { path: 'auth/social-callback', component: SocialCallbackComponent },
  { path: '', component: HomeComponent },
  { path: 'success', component: LoggedInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
