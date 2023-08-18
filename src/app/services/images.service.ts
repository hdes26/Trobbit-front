import { Injectable } from '@angular/core';
import { CatImage } from '../models/image.model';
import axios from 'axios';
import { environment } from 'src/environments/environments';
import { FavoriteImage } from '../models/favoriteImage.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = environment.apiUrl;
  constructor( ) { }

  async randomImages(): Promise<CatImage []> {
        const { data } =  await axios.get(`${this.apiUrl}/images`);
        return data;
  }
  async addFavorite(favoriteData: {image_id:string, sub_id:string}) {
        const { data } =  await axios.post(`${this.apiUrl}/images/favourites/add`, favoriteData);
        return data;
  }
  async favoriteImages():Promise<FavoriteImage[]> {
        const { data } =  await axios.get(`${this.apiUrl}/images/favourites`);
        return data;
  }

}