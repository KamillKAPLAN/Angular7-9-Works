import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular API Sepet Application';
  public options = {
    position: ['bottom', 'right'],
    timeOut: 3000,
    lastOnBottom: true
  };
}
