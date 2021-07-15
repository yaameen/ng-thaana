import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thaana-tester';

  name!: string

  postCallback(e: any) {
    console.log('You typed: ', e);
    
  }
}
