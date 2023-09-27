import { Component, Input } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-dogcard',
  templateUrl: './dogcard.component.html',
  styleUrls: ['./dogcard.component.css']
})
export class DogcardComponent {
  constructor(private api: DogApiService) {
  }

  ngOnInit() {
    if (this.breed) {
      this.api.getBreedImg(this.breed).subscribe((data: any) => {
        if (data.status == "success") {
          this.image = data.message;
        }
      })

      this.label = this.breed ? this.breed.split('/').reverse().map(x => {
        return x.charAt(0).toUpperCase() + x.slice(1);
      }).join(' ') : "";
    }
  }

  @Input() breed?: String;
  image?: string;
  label?: string;

  newImage(event : Event) {
    event.preventDefault();
    if (this.breed) {
      this.api.getBreedImg(this.breed).subscribe((data: any) => {
        if (data.status == "success") {
          this.image = data.message;
        }
      })
    }
  }
}
