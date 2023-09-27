import { Component } from '@angular/core';
import { DogApiService } from './dog-api.service';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FetchProject';
  constructor(private api: DogApiService) {
  }

  dogModel?: Model;

  ngOnInit() {
    this.api.getBreeds().subscribe((data) => {
      this.dogModel = new Model(data);
    })
  }
}
