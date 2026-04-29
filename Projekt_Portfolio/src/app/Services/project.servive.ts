import { Injectable } from '@angular/core';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServive {
  projects: Project[] = [];

  constructor() {    
    this.projects.push(
      new Project(
        'Finanztracker',
        'Ich programmiere mit Java Swing einen Finanztracker mit welchem man Budget planen kann und Einnahmen und Ausgaben hinzufügen kann.',
        '/tracker.png',
        ''
      )
    );
    this.projects.push(
      new Project(
        'Racing-Game',
        'Ich habe mit Java Swing ein Rennspiel entwickelt. Es gibt einen Single und Multiplayermode. Man kann eigene Racetracks erstellen und sein Auto konfigurieren.',
        '/race.png',
        ''
      )
    );
    this.projects.push(
      new Project(
        'Tetris',
        'Ich habe auf einem ESP32 Arduino ein Tetris programmiert. Es gibt ein Leaderboard und man kann verschiedene Farben einstellen. ',
        '/tetris.png',
        ''
      )
    );
  }
}

