import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  constructor(private http:HttpClient) { 

  }

  getBreeds() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }
}
