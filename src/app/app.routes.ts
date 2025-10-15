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

export const routes: Routes = [

    {path: 'header', component: Header },
    {path: 'contact', component: Contact },
    {path: 'careerprofile', component: Careerprofile },
    {path: 'education', component: Education },
    {path: 'feedback', component: Feedback },
    {path: 'gallery', component: Gallery },
    {path: 'home', component: Home, pathMatch: 'full' },
    {path: 'login', component: Login },
    {path: 'signup', component: Signup },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }