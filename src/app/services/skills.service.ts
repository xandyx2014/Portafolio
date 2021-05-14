import { Skill } from '../models/skills.model';

export class SkillsService {
  skill: Skill[] = [
    new Skill(
      'HTML | CSS',
      'p-85',
      'html',
      'Correcto uso de las etiquetas semanticas de HTML 5. Conocimentos de CSS 3 de flexbox, grid layout, transiciones y animaciones.'
    ),
    new Skill('Javascript', 'p-80', 'javascript', ''),
    new Skill('Git & Github', 'p-80', 'git', ''),
    new Skill('Jest', 'p-80', 'jest', ''),
    new Skill('MongoDB', 'p-80', 'mongo', ''),
    new Skill('Node js', 'p-80', 'nodejs', ''),
    new Skill('React', 'p-80', 'react', ''),
    new Skill('Redux', 'p-80', 'redux', ''),
    /* new Skill('Angular', 'p-80', 'angular', ''), */
    new Skill('Vue', 'p-80', 'vue', ''),
    new Skill('Laravel', 'p-80', 'laravel', ''),
    new Skill('Flutter', 'p-80', 'flutter', ''),
    new Skill('Scrum', 'p-80', 'scrum', ''),
    new Skill('Cypress', 'p-80', 'cypress', ''),
  ];
}
