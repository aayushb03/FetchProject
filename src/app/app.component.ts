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
  dropdown: string[] = [];
  displayed: string[] = [];
  showSub: boolean = false;
  selectedBreed = {
    $ngOptionValue: undefined,
    $ngOptionLabel: 'Search or Select Breed',
    disabled: false
  };

  ngOnInit() {
    this.api.getBreeds().subscribe((data: any) => {
      this.dogModel = new Model(data);
      this.onSubClick();
    });
    this.api.getRandImg().subscribe((data: any) => {
      this.randImage = data.message;
    });
  }

  onSubClick() {
    if (this.dogModel) {
      this.dropdown.length = 0;
      if (this.showSub) {
        for (const breed of this.dogModel.breeds) {
          const b = breed.charAt(0).toUpperCase() + breed.slice(1);
          this.dropdown.push(b);
          for (const subBreed of this.dogModel.subBreeds[breed]) {
            const s = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
            const c = s + " " + b;
            this.dropdown.push(c);
          }
        }
      } else {
        for (const breed of this.dogModel.breeds) {
          const b = breed.charAt(0).toUpperCase() + breed.slice(1);
          this.dropdown.push(b);
        }
      }
    }
  }

  onSelect(option: any) {
    if (!option) {
      this.selectedBreed = {
        $ngOptionValue: undefined,
        $ngOptionLabel: 'Select Breed',
        disabled: false
      };
    } else {
      const breed: string = option.$ngOptionLabel;
      const s = breed.split(' ').reverse().map(x => {
        return x.charAt(0).toLowerCase() + x.slice(1);
      }).join('/');
      if (!this.displayed.find(x => x == s)) {
        this.displayed.unshift(s);
      }
    }
  }

  onDelete(breed: String) {
    this.displayed = this.displayed.filter(x => x != breed);
  }

  selectAll() {
    for (const breed of this.dropdown) {
      this.onSelect({ $ngOptionLabel: breed });
    }
  }

  reset() {
    this.displayed.length = 0;
  }

}
