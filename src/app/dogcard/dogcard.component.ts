import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dogcard',
  templateUrl: './dogcard.component.html',
  styleUrls: ['./dogcard.component.css']
})
export class DogcardComponent {
  @Input() dog? : String;
}
