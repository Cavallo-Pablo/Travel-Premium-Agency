import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  ngOnInit(): void { this.initUser() }

  constructor() { }

  private route = inject(ActivatedRoute)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private apiService = inject(ApiService)


  formulario: FormGroup = this.formBuilder.group({
    editId: 0,
    editLastName: ['', [Validators.required]],
    editName: ['', [Validators.required]],
    editDni: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
    editBirthdate: ['', [Validators.required]],
    editEmail: ['', [Validators.required, Validators.email]],
    editUsername: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
    editPassword: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]]
  })
  initUser() {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      if (!isNaN(userId)) {
        this.apiService.getUser(userId).subscribe({
          next: (resp) => {
            console.log(resp)
            this.formulario = this.formBuilder.group({
              editId: [resp.id],
              editLastName: [resp.lastName],
              editName: [resp.name],
              editDni: [resp.dni],
              editBirthdate: [resp.birthdate],
              editEmail: [resp.email],
              editUsername: [resp.userName],
              editPassword: [resp.password]
            })
          },
          error: (error) => { console.log(error) }
        })
      } else {
        console.log('Id de cliente no valido')
      }
    })
  }
  editarUsuario() {
    if (!this.formulario.valid) return;
    const usuario: User = {
      id: this.formulario.controls['editId'].value,
      lastName: this.formulario.controls['editLastName'].value,
      name: this.formulario.controls['editName'].value,
      dni: this.formulario.controls['editDni'].value,
      birthdate: this.formulario.controls['editBirthdate'].value,
      email: this.formulario.controls['editEmail'].value,
      userName: this.formulario.controls['editUsername'].value,
      password: this.formulario.controls['editPassword'].value

    }
    this.apiService.putUser(usuario).subscribe({
      next: () => {
        console.log(usuario)
        alert(`El usuario ${usuario.lastName}, ${usuario.name} fue modificado con exito`)
        this.router.navigate(['/user'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
