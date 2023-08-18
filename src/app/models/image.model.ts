export class CatImage {
    constructor(
      public id: string,
      public url: string,
      public width: number,
      public height: number,
      public breeds: [],
      public categories: [{}]
    ) {}
  
    static fromApiResponse({ id, url, width, height, breeds, categories }: {id:string, url:string, width:number, 
                                                                            height:number, breeds:[], categories:[{}]}) {
      return new CatImage(id, url, width, height, breeds, categories);
    }
  }