import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriteImage } from 'src/app/models/favoriteImage.model';
import { CatsService } from 'src/app/services/cats.service';
import { ImagesService } from 'src/app/services/images.service';
import Swal from 'sweetalert2'


interface Data {
  data: FavoriteImage[]
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data!: { data: FavoriteImage[] };
  images!: FavoriteImage[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private imagesService: ImagesService,
    private catsService: CatsService,
    private router: Router
    ) {
    this.activatedRoute.params.subscribe(params => {
      this.catId = params['id'];
    });
    this.data = this.activatedRoute.snapshot.data as Data;
    this.images = this.data.data;
  }
  catForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    breed: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]+$')]),
    image: new FormControl('', [Validators.required]),
  });
  catId: string = '';
  favoriteImages: boolean = false;

  ngOnInit(): void {
    this.getCatById()
  }

  onSubmit() {
    this.update()
  }

  showFavoriteImages() {
    this.favoriteImages = true;
  }

  handleChangeImage(url:string){
    this.catForm.get('image')?.setValue(url)
  }

  async getCatById() {
    const cat = await this.catsService.listById(this.catId);
    this.catForm.get('name')?.setValue(cat.name)
    this.catForm.get('breed')?.setValue(cat.breed)
    this.catForm.get('age')?.setValue(cat.age)
    this.catForm.get('image')?.setValue(cat.image)
  }

  async update() {
    const cat = await this.catsService.update(this.catId, this.catForm.value);
    if (!cat) {
      Swal.fire({
        text: 'Error creando gato',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.router.navigate(['/cats']);
    });
  }
}
