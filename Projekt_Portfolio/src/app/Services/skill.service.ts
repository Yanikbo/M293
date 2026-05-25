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
        'Durch das Studium von Fachliteratur und die Umsetzung verschiedener Projekte, wie etwa eines Finanztrackers oder eines Rennspiels, konnte ich fundierte Kenntnisse in Java erwerben.',
        'java.png',
        'Average'
      )
    );
    this.skills.push(
      new Skill(
        'C',
        'C war meine erste Programmiersprache, in der ich sowohl schulische Module als auch praktische Projekte im Bereich der Arduino-Programmierung erfolgreich abgeschlossen habe.',
        'c.png',
        'Average'
      )
    );
    this.skills.push(
      new Skill(
        'Angular',
        'Das Angular-Framework setze ich primär im beruflichen Umfeld ein, wo ich bereits diverse Übungen und praxisnahe Projekte realisiert habe.',
        'angular.png',
        'Beginner'
      )
    );
    this.skills.push(
      new Skill(
        'SQL',
        'Aktuell vertiefe ich meine SQL-Kenntnisse im schulischen Rahmen und habe einen überbetrieblichen Kurs (ÜK) abgeschlossen. Beruflich sammle ich zudem Erfahrung in der Arbeit mit JPQL.',
        'sql.png',
        'Average'
    )
    );
    this.skills.push(
      new Skill(
        'Drawing',
        'Neben der Programmierung widme ich mich seit vielen Jahren dem Zeichnen. Ein besonderer Meilenstein war meine künstlerische Abschlussarbeit in der Sekundarschule.',
        'drawing.png',
        'Advanced'
      )
    );
    this.skills.push(
      new Skill(
        'Swimming',
        'Seit meiner Kindheit ist das Schwimmen ein fester Bestandteil meines Alltags. Nach langjähriger Vereinszugehörigkeit im Schwimmclub trainiere ich heute wöchentlich im privaten Rahmen.',
        'swimming.png',
        'Advanced'
      )
    );
  }

  getSkills(): Skill[] {
    return this.skills;
  }
}
