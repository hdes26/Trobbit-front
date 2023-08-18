import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private catsService: CatsService) { }
  cats: Cat[] = [];

  ngOnInit(): void {
    this.list()
  }
  async create(catData:Cat) {
    await this.catsService.create(catData)
  }
  async list() {
    this.cats = await this.catsService.list();
  }
  async remove(id:string) {
    await this.catsService.remove(id);
    this.cats = this.cats = await this.catsService.list();
  }
}
