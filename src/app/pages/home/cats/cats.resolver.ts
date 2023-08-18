import { Injectable } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';
import { CatsService } from 'src/app/services/cats.service';

@Injectable({
  providedIn: 'root'
})
export class CatsResolver {
  constructor(private catService: CatsService) {

  }
  async resolve(): Promise<Cat[]> {
    const data = await this.catService.list()
    return data;
  }
}