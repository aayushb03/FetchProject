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
  randImage?: String;

  ngOnInit() {
    this.api.getBreeds().subscribe((data : any) => {
      this.dogModel = new Model(data);
    })
    this.api.getRandImg().subscribe((data : any) => {
      this.randImage = data.message;
    })
  }
}
