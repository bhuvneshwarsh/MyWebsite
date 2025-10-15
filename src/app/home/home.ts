import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Common } from "../common/common";

@Component({
  selector: 'app-home',
  imports: [Common],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
