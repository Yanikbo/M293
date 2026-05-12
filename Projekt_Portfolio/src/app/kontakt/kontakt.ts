import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  imports: [FormsModule],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class Kontakt {
  input: string = '';
  name: string = '';
  email: string = '';

  sendMessage() {
    this.input = '';
    this.name = '';
    this.email = '';
  }
}
