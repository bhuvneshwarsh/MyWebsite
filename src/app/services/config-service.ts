import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get('/assets/config/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  get apiUrl(): string {
    return this.config?.apiUrl;
  }

  get authUrl(): string {
    return this.config?.authUrl;
  }
}
