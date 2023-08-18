import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatsService } from 'src/app/services/cats.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private catsService: CatsService, private router: Router) { }

  catForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    breed: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]+$')]),
    image: new FormControl('', [Validators.required]),
  });

  onSubmit(){
    this.create()
  }

  async create() {
   const cat =  await this.catsService.create(this.catForm.value);
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
