import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.css']
})
export class EditMessageComponent {
  ngOnInit(): void { this.initMessage() }

  constructor() { }

  private route = inject(ActivatedRoute)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private apiService = inject(ApiService)

  formulario: FormGroup = this.formBuilder.group({
    editId: 0,
    editName: ['', [Validators.required]],
    editSubject: ['', [Validators.required]],
    editEmail: ['', [Validators.required, Validators.email]],
    editPhone: ['', [Validators.required]],
    editMessage: ['', [Validators.required]]
  })
  initMessage() {
    this.route.params.subscribe(params => {
      const messageId = +params['id'];
      if (!isNaN(messageId)) {
        this.apiService.getContact(messageId).subscribe({
          next: (resp) => {
            console.log(resp)
            this.formulario = this.formBuilder.group({
              editId: [resp.id],
              editName: [resp.name],
              editSubject: [resp.subject],
              editEmail: [resp.email],
              editPhone: [resp.phone],
              editMessage: [resp.message]
            })
          },
          error: (error) => {
            console.log(error)
          }
        })
      } else[console.log('Id del mensage no valido')]
    })
  }
  editarMensage() {
    if (!this.formulario.valid) return;
    const mensaje: Message = {
      id: this.formulario.controls['editId'].value,
      name: this.formulario.controls['editName'].value,
      subject: this.formulario.controls['editSubject'].value,
      email: this.formulario.controls['editEmail'].value,
      phone: this.formulario.controls['editPhone'].value,
      message: this.formulario.controls['editMessage'].value
    }
    this.apiService.putContact(mensaje).subscribe({
      next: (resp) => { 
        console.log(mensaje)
        alert(`El mensaje de: ${mensaje.name}, con el asunto ${mensaje.subject} fue modificado con exito`)
        this.router.navigate(['/message'])
      },
      error: (error) => { 
        console.log(error) }
    })
  }
}
