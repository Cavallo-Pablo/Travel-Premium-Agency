import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NewTravelComponent } from './modules/travels/new-travel/new-travel.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { NewUserComponent } from './modules/user/new-user/new-user.component';
import { LoginAdminComponent } from './modules/auth/login/login-admin/login-admin.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { ListTravelComponent } from './modules/travels/list-travel/list-travel.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginUserComponent } from './modules/auth/login/login-user/login-user.component';
import { RegisterUserComponent } from './modules/auth/register/register-user/register-user.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { EditTravelComponent } from './modules/travels/edit-travel/edit-travel.component';
import { ListMessageComponent } from './modules/message/list-message/list-message.component';
import { NewMessageComponent } from './modules/message/new-message/new-message.component';
import { EditMessageComponent } from './modules/message/edit-message/edit-message.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewBuyComponent } from './modules/buy/new-buy/new-buy.component';
import { ListBuyComponent } from './modules/buy/list-buy/list-buy.component';
import { EditBuyComponent } from './modules/buy/edit-buy/edit-buy.component';
import { LoginUserBuyComponent } from './modules/auth/login/login-user-buy/login-user-buy.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },

  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'adminPage', component: AdminPageComponent },
  
  { path: 'loginUser', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'userPage', component: UserPageComponent },

  { path: 'user', component: ListUserComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'editUser', component: EditUserComponent },

  { path: 'travel', component: ListTravelComponent },
  { path: 'newTravel', component: NewTravelComponent },
  { path: 'editTravel', component: EditTravelComponent },

  { path: 'message', component: ListMessageComponent },
  { path: 'newMessage', component: NewMessageComponent },
  { path: 'editMessage', component: EditMessageComponent },

  { path: 'select', component: CardPageComponent },

  { path: 'buys', component: ListBuyComponent },
  { path: 'newBuy', component: NewBuyComponent },
  { path: 'loginUserBuy', component: LoginUserBuyComponent },
  { path: 'registerUserBuy', component: RegisterUserComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
