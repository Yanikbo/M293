import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";
import { Fusszeile } from "./fusszeile/fusszeile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Fusszeile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Projekt_Portfolio');
}
