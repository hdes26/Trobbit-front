import { Injectable } from '@angular/core';
import { FavoriteImage } from 'src/app/models/favoriteImage.model';
import { ImagesService } from 'src/app/services/images.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteImagesResolver {
  constructor(private imageService: ImagesService) {

  }
  async resolve(): Promise<FavoriteImage[]> {
    const data = await this.imageService.favoriteImages()
    return data;
  }
}