import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter<String>();
  image?: string;
  label?: string;

  handleImageError(event: any) {
    event.target.src = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952bte863vkjup3htoufh75xovqb6se5mreiu76nmjr&ep=v1_gifs_search&rid=200w.gif&ct=g';
  }

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

  onDelete(event : Event) {
    event.preventDefault();
    if (this.breed) {
      this.delete.emit(this.breed);
    }
  }
}
