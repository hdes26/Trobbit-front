import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/models/cat.model';
import { CatsService } from 'src/app/services/cats.service';

interface Data {
  data: Cat[]
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data!: { data: Cat[] };
  cats: Cat[] = [];
  constructor(private catsService: CatsService, private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data as Data;
    this.cats = this.data.data;

  }
  ngOnInit(): void {}
  async create(catData: Cat) {
    await this.catsService.create(catData)
  }
  async list() {
    this.cats = await this.catsService.list();
  }
  async remove(id: string) {
    await this.catsService.remove(id);
    this.cats = this.cats = await this.catsService.list();
  }
}
