import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
declare var auth0;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0 = new auth0.WebAuth({
    clientID: 'xDB5CVTZmqvIBKh9865ZqZ4lJkSHNM2c',
    domain: 'pri.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pri.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor() { }

  public handleAuth() {
    this.auth0.parseHash( (err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken){
        window.location.hash = '';
        this.setSession(authResult);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }


  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isAuth() {
    // return of(true).pipe(delay(2000));
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }
}
