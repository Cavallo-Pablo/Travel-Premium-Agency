import { Component, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin, User } from 'src/app/core/models.module';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  public user: User = new User()

  private apiService = inject(ApiAuthService)
  private formBuider = inject(FormBuilder)
  private router = inject(Router)
  private sharedUser = inject(SharedService)

  formulario: FormGroup = this.formBuider.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]]
  })

  get getEmail() {
    return this.formulario.get('email') as FormControl;
  }
  get getPassword() {
    return this.formulario.get('password') as FormControl;
  }

  constructor() { }

  ngOnInit(): void { }

  initSession() {
    if (this.formulario.valid) {
      this.user.email = this.formulario.value.email;
      this.user.password = this.formulario.value.password;
      this.apiService.getLoginByUser(this.user).subscribe
        ({
          next: (users: User[]) => {
            if (users.length > 0) {
              const user = users[0];
              console.log("el user se verifico con exito")
              this.sharedUser.setSharedUser(user)
              this.router.navigate(["/userPage"])
            } else { alert("\nError verifique los datos\nEmail  o password son incorrectos") }
          },
          error: (error: any) => {
            console.log("error")
          }
        })
    }
  }
}