import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getRandomDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    return this.http.get<{message: string}>(url);
  }
}
