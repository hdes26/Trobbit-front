export class Cat {
    constructor(
      public _id: string,
      public name: string,
      public age: number,
      public breed: string,
      public image: string
    ) {}
  
    static fromApiResponse({ _id, name, age, breed, image }: Cat) {
      return new Cat(_id, name, age, breed, image);
    }
  }
  