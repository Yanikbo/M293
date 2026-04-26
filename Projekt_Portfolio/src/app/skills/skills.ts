import { Component, OnInit } from '@angular/core';
import { SkillService } from '../Services/skill.service';
import { Skill } from '../classes/skill';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  constructor(private skillService: SkillService) {}
  skills: Skill[] = [];

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
}
