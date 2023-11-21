import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models.module';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  
  listaUsuarios: User[] = [];

  ngOnInit(): void { }

  constructor() { }

  private apiService = inject(ApiService)
  private formBuider = inject(FormBuilder)
  private router = inject(Router)

  formulario: FormGroup = this.formBuider.group({
    id: 0,
    lastName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    dni: ['', [Validators.required , Validators.minLength(7), Validators.maxLength(8)]],
    birthdate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
    password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]]
  })

  altaUsuario() {
    if (!this.formulario.valid) return;
    const usuario: User = {
      id: this.formulario.controls['id'].value,
      lastName: this.formulario.controls['lastName'].value,
      name: this.formulario.controls['name'].value,
      dni: this.formulario.controls['dni'].value,
      birthdate: this.formulario.controls['birthdate'].value,
      email: this.formulario.controls['email'].value,
      userName: this.formulario.controls['username'].value,
      password: this.formulario.controls['password'].value
    }
    this.apiService.postUser(usuario).subscribe({
      next: (post) => {
        console.log(usuario)
        alert(`El usuario ${usuario.lastName}, ${usuario.name} fue agregado con exito`)
        this.router.navigate(['/loginUser'])
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
