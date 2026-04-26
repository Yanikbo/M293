import { Injectable } from '@angular/core';
import { Skill } from '../classes/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  public skills: Skill[] = [];

  constructor() {
    this.skills.push(
      new Skill(
        'JAVA',
        'Ich habe eine Buch über Java gelesen und schon mehrere Projekte damit programmiert. Zum Beispiel mein Finanztracker oder mein Race-Game.',
        '/java.png',
        'Average'
      )
    );
    this.skills.push(
      new Skill(
        'C',
        'C war meine erste richtige Programmiersprache. Ich hatte in der Schule ein Modul. Meine Arduinoprojekte habe ich mit C programmiert.',
        '/c.png',
        'Average'
      )
    );
    this.skills.push(
      new Skill(
        'Angular',
        'Ich brauche das Angular Framework meisst im Geschäftsbereich. Dort habe ich schon mehrere Übungen und Projekte gemacht. ',
        '/angular.png',
        'Beginner'
      )
    );
    this.skills.push(
      new Skill(
        'SQL',
        'SQL habe ich momentan in der Schule und werden auch noch einen ÜK darüber haben. Im Geschäft arbeite ich vorallem mit JPQL.',
        '/sql.png',
        'Average'
    )
    );
    this.skills.push(
      new Skill(
        'Drawing',
        'Das ist ein Hobby neben dem Programmieren. Ich zeichne schon seit vielen Jahren und habe auch als meine Abschlussnote der 3. Sek eine Bild gemalt',
        '/drawing.png',
        'Advanced'
      )
    );
    this.skills.push(
      new Skill(
        'Swimming',
        'Ich schwimme schon seit meiner Kindheit und habe den Schwimmclub für viele Jahre besucht. Früher im Klub heute einmal wöchentlich für mich Privat.',
        '/swimming.png',
        'Advanced'
      )
    );
  }

  getSkills(): Skill[] {
    return this.skills;
  }
}
