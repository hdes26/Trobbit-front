export class CatImage {
    constructor(
      public id: string,
      public url: string,
      public width: number,
      public height: number,
      public breeds: [],
      public categories: [{}]
    ) {}
  }