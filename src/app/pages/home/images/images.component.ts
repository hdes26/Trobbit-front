import { Component, OnInit } from '@angular/core';
import { CatImage } from 'src/app/models/image.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(private imagesService: ImagesService,) { }
  images: CatImage[] = [];

  ngOnInit(): void {
    this.randomImages()
  }

  async randomImages() {
    this.images = await this.imagesService.randomImages()
  }
  async addFavorites(image_id: string) {
    this.imagesService.addFavorite({ sub_id: 'Ache', image_id })
  }
}
