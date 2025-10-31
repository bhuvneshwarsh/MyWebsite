import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header';
import { Contact } from './contact/contact';
import { Careerprofile } from './careerprofile/careerprofile';
import { Education } from './education/education';
import { Feedback } from './feedback/feedback';
import { Gallery } from './gallery/gallery';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { PageNotFound } from './page-not-found/page-not-found';
import { ForgotPassword } from './forgot-password/forgot-password';
import { OtpValidation } from './otp-validation/otp-validation';
import { Userprofile } from './userprofile/userprofile';
import { Updatepassword } from './updatepassword/updatepassword';

export const routes: Routes = [

    {path: '', redirectTo:'/home', pathMatch:"full"},
    {path: 'header', component: Header },
    {path: 'contact', component: Contact },
    {path: 'careerprofile', component: Careerprofile },
    {path: 'education', component: Education },
    {path: 'feedback', component: Feedback },
    {path: 'gallery', component: Gallery },
    {path: 'home', component: Home, pathMatch: 'full' },
    {path: 'login', component: Login },
    {path: 'signup', component: Signup },
    {path: 'forgot-password', component: ForgotPassword },
    {path: 'otp-validation', component: OtpValidation },
    {path: 'userprofile', component: Userprofile },
    {path: 'updatepassword', component: Updatepassword },
    {path: '**', component: PageNotFound }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }