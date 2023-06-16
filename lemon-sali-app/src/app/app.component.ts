import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LEMON SALI';
  nimi = '';


  getNimi (nimi : String) {
    
  }
  terve (nimi : String) {

    alert('TERVE ' + nimi);
  
  }
}
