import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  mensajeLista: Message[] = []

  constructor() { }
  ngOnInit(): void {

  }
  private route = inject(ActivatedRoute)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private apiService = inject(ApiService)

  formulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]],
    id:0
  })

  altaContacto() {

    console.log("hola")
    if (this.formulario.invalid) return;
    console.log("hola")

    const mensaje: Message = {
      id: 0,
      name: this.formulario.controls['name'].value,
      subject: this.formulario.controls['subject'].value,
      email: this.formulario.controls['email'].value,
      phone: this.formulario.controls['phone'].value,
      message: this.formulario.controls['message'].value
    }

    console.log("hola 2")
    this.apiService.postContact(mensaje).subscribe({
      next: (resp) => {
        console.log('hasta aca funciona'+ resp)

        alert(`El mensaje de ${mensaje.name},fue enviado con exito`)
        this.router.navigate(['/landing'])
      },
      error: (error) => { console.log(error) }
    })
  }

}
