import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security';

  constructor(private auth: AuthService, sanitizer: DomSanitizer) {
    this.auth.handleAuth();

    // if yourOwnCheck(url)
    //sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  login() {
    this.auth.login();
  }


  logout() {
    this.auth.logout();
  }
}
