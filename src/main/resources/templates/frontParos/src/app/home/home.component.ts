import { ImageService } from './../services/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageUrl: string | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getRandomDogImage().subscribe((response) => {
      this.imageUrl = response.message;
    });
  }
}
