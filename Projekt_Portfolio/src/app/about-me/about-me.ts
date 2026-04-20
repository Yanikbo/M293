import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";

@Component({
  selector: 'app-about-me',
  imports: [Navigation],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})

export class AboutMe {
  counter: number = 1;

  counterPlus() {
    this.counter++;
    if(this.counter > 3) {
      this.counter = 1;
    }
  }
}
