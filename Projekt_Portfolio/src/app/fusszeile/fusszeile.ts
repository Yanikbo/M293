import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-fusszeile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fusszeile.html',
  styleUrl: './fusszeile.scss',
})
export class Fusszeile {}
