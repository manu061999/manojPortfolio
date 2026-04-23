import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  icon: string;
  title: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      icon: 'bi-shield-check',
      title: 'Automation & QA',
      color: '#0dcaf0',
      skills: ['Test Automation Framework', 'Automation Testing', 'API Testing', 'Test Case Management', 'Quality Assurance', 'Regression Testing']
    },
    {
      icon: 'bi-gear',
      title: 'Tools & Frameworks',
      color: '#fd7e14',
      skills: ['Selenium WebDriver', 'TestNG', 'POM', 'Data-Driven Framework', 'Postman', 'Jenkins']
    },
    {
      icon: 'bi-code-slash',
      title: 'Programming & Database',
      color: '#20c997',
      skills: ['Java', 'JavaScript', 'SQL']
    },
    {
      icon: 'bi-git',
      title: 'DevOps & Tools',
      color: '#6610f2',
      skills: ['Git', 'CI/CD', 'Atlassian Jira', 'Confluence', 'Zephyr', 'Kiro']
    },
    {
      icon: 'bi-robot',
      title: 'AI & Modern Skills',
      color: '#df1529',
      skills: ['Amazon Q', 'Kiro', 'Prompt Engineering', 'Structured Prompting', 'AI-assisted Test Case Generation', 'AI-assisted Root Cause Analysis']
    },
    {
      icon: 'bi-person-hearts',
      title: 'Soft Skills',
      color: '#f3268c',
      skills: ['Learning Spirit', 'Self Learning', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Communication', 'Time Management', 'Attention to Detail']
    }
  ];
}
