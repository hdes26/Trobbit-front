import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteImage } from 'src/app/models/favoriteImage.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private route: ActivatedRoute, private imagesService: ImagesService) {
    this.route.params.subscribe(params => {
      const catId = params['id'];
    });
  }
  ngOnInit(): void {
    this.favoriteImages()
  }
  images:FavoriteImage[] = [];


  async favoriteImages(){
     this.images= await this.imagesService.favoriteImages()
  }
}
