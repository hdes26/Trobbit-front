import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatImage } from 'src/app/models/image.model';
import { ImagesService } from 'src/app/services/images.service';

interface Data {
  data: CatImage[]
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  data!: { data: CatImage[] };
  images!: CatImage[];
  constructor(private imagesService: ImagesService, private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data as Data;
    this.images = this.data.data;
  }

  ngOnInit(): void {
  }

  async addFavorites(image_id: string) {
    this.imagesService.addFavorite({ sub_id: 'Ache', image_id })
  }
}
