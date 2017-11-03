import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/pluck';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  urlChuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';
  cnGet$;

  constructor(private httpClient: HttpClient) {
    this.cnGet$ = httpClient.get(this.urlChuckNorrisAPI).pluck('value').delay(6000).repeat();
  }
}
