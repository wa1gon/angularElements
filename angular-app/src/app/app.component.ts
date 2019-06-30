import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }
}
