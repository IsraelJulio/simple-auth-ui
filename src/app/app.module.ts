import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialCallbackComponent } from './social-callback/social-callback.component';
import { HomeComponent } from './home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialCallbackComponent,
    HomeComponent,
    LoggedInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
