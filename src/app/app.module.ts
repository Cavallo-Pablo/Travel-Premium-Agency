import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTravelComponent } from './modules/travels/new-travel/new-travel.component';
import { EditTravelComponent } from './modules/travels/edit-travel/edit-travel.component';
import { ListTravelComponent } from './modules/travels/list-travel/list-travel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginUserComponent } from './modules/auth/login/login-user/login-user.component';
import { RegisterUserComponent } from './modules/auth/register/register-user/register-user.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { NewUserComponent } from './modules/user/new-user/new-user.component';
import { LoginAdminComponent } from './modules/auth/login/login-admin/login-admin.component';
import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HeaderLandingComponent } from './shared/header-landing/header-landing.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ListMessageComponent } from './modules/message/list-message/list-message.component';
import { NewMessageComponent } from './modules/message/new-message/new-message.component';
import { EditMessageComponent } from './modules/message/edit-message/edit-message.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewBuyComponent } from './modules/buy/new-buy/new-buy.component';
import { ListBuyComponent } from './modules/buy/list-buy/list-buy.component';
import { EditBuyComponent } from './modules/buy/edit-buy/edit-buy.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { LoginUserBuyComponent } from './modules/auth/login/login-user-buy/login-user-buy.component';
import { RegisterUserBuyComponent } from './modules/auth/register/register-user-buy/register-user-buy.component';
/*import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; */

@NgModule({
  declarations: [
    AppComponent,
    NewTravelComponent,
    EditTravelComponent,
    ListTravelComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    MainPageComponent,
    UserPageComponent,
    LoginUserComponent,
    RegisterUserComponent,
    EditUserComponent,
    ListUserComponent,
    NewUserComponent,
    LoginAdminComponent,
    CarouselPageComponent,
    AdminPageComponent,
    HeaderLandingComponent,
    CardPageComponent,
    ListMessageComponent,
    NewMessageComponent,
    EditMessageComponent,
    HomePageComponent,
    NewBuyComponent,
    ListBuyComponent,
    EditBuyComponent,
    NavbarAdminComponent,
    LoginUserBuyComponent,
    RegisterUserBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgbModule,
    CarouselModule,
    MatSlideToggleModule/* ,
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
