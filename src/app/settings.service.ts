import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale() {
    // return "pt"; /* Qualquer um dos dois */
    return "pt-BR";
  }
}
