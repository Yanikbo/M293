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
        'Entwicklung eines Finanztrackers mittels Java Swing zur effizienten Budgetplanung sowie zur Erfassung von Einnahmen und Ausgaben. Man kann selbstständig Kategorien erstellen. ',
        'Der Finanztracker war mein erstes eigenes Projekt und hat mit geholfen Java und das Objektorientierte Programmieren besser zu verstehen und anzuwenden. Es ist aus der Idee entstanden, dass ich ein Tool zur Verwaltung meiner Finanzen benötige. Das Projekt umfasst Funktionen wie die Kategorisierung von Transaktionen, Budgets festzulegen. Er ist noch in arbeite, welche allerdings zurzeit pausiert ist.',
        '/tracker.png',
        ''
      )
    );
    this.projects.push(
      new Project(
        'Racing-Game',
        'Mit Java Swing entwickeltes Rennspiel, das sowohl einen Einzel- als auch einen Mehrspielermodus bietet. Es gibt einen Strecken-Editor sowie die Möglichkeit zur Fahrzeugkonfiguration.',
        'Dieses Rennspiel entstand ebenfalls als Übung, ich durfte im Betrieb ein Projekt umsetzten um Java besser zu verstehen. Ich habe mich für ein einfaches Rennspiel entschieden wegen meiner fasznation für Autos. Es bietet die Möglichkeit, zwischen einem Einzel- und Mehrspielermodus zu wechseln, wobei der Mehrspielermodus über das Netzwerk realisiert ist. Zusätzlich verfügt das Spiel über einen Strecken-Editor, mit dem Spieler ihre eigenen Rennstrecken erstellen können, sowie eine Fahrzeugkonfiguration, die es ermöglicht, verschiedene Aspekte der Fahrzeuge anzupassen.',
        '/race.png',
        'h'
      )
    );
    this.projects.push(
      new Project(
        'Tetris',
        'Implementierung des Klassikers Tetris auf einem ESP32-Mikrocontroller (Arduino) und mit C programmiert. Das Projekt umfasst ein Leaderboard-System sowie anpassbare Farbeinstellungen.',
        'Das war mein erstes grösseres Programmierprojekt überhaupt welches ich praktisch komplett alleine umgesetzt habe. Es war eine grosse Herausforderung, da ich zu diesem Zeitpunkt noch nicht viel Erfahrung mit der Programmierung hatte. Das Projekt beinhaltet die Implementierung des klassischen Spiels Tetris auf einem ESP32-Mikrocontroller unter Verwendung der Arduino-Plattform. Es bietet ein Leaderboard-System, das es den Spielern ermöglicht, ihre Punktzahlen zu speichern und mit anderen zu vergleichen. Zudem gibt es anpassbare Farbeinstellungen, die es den Spielern erlauben, das Erscheinungsbild des Spiels nach ihren Vorlieben zu gestalten.',
        '/tetris.png',
        'h'
      )
    );
  }
}

