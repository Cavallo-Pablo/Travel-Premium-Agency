import { Component, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin, User } from 'src/app/core/models.module';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  private admin: Admin = new Admin()
  constructor() { }

  private apiService = inject(ApiAuthService)
  private formBuider = inject(FormBuilder)
  private router = inject(Router)

  formulario: FormGroup = this.formBuider.group({
    'userName': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
    'password': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]]
  })

  get getUsername() {
    return this.formulario.get('userName') as FormControl;
  }
  get getPassword() {
    return this.formulario.get('password') as FormControl;
  }



  ngOnInit(): void { }

  initSession() {
    if (this.formulario.valid) {
      this.admin.userName = this.formulario.value.userName;
      this.admin.password = this.formulario.value.password;
      this.apiService.getLoginByAdmin(this.admin).subscribe
        ({
          next: (admins: Admin[]) => {
            if (admins.length > 0) {
              console.log("el admin se verifico con exito")
              this.router.navigate(["/travel"])
            } else { alert("\nError verifique los datos\nUsername  o password son incorrectos") }
          },
          error: (error: any) => {
            console.log("error")
          }
        })
    }
  }
}
