import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'max-number-of-directives';

  ngAfterViewInit(){
    console.log('App comp after view init');
  }
}
