import { Injectable } from '@angular/core';
import { CatImage } from 'src/app/models/image.model';
import { ImagesService } from 'src/app/services/images.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesResolver {
  constructor(private imageService: ImagesService) {

  }
  async resolve(): Promise<CatImage[]> {
    const data = await this.imageService.randomImages()
    return data;
  }
}