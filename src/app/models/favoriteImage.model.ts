export class FavoriteImage {
    constructor(
      public id: number,
      public user_id: string,
      public image_id: string,
      public sub_id: string,
      public created_at: string,
      public image: CatImage
    ) {}
  
  }
  
  export class CatImage {
    constructor(
      public id: string,
      public url: string
    ) {}
  
  }
  