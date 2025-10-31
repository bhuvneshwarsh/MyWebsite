import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ConfigService } from './services/config-service';



@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('angular_practice');

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.loadConfig().then(() => {
      // Now config is loaded, you can safely use apiUrl
      console.log(this.configService.apiUrl); // Should print http://localhost:4200/
    });
  }

}