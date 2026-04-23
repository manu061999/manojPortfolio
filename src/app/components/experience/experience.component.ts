import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  points: string[];
}

interface EmploymentItem {
  title: string;
  period: string;
  org: string;
  projects: Project[];
}

interface ResumeItem {
  title: string;
  period: string;
  org: string;
  description?: string;
}

interface AiItem {
  icon: string;
  title: string;
  text: string;
}

interface Achievement {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeTab = 'work';

  education: ResumeItem[] = [
    {
      title: 'Bachelor of Technology (Information Technology)',
      period: '2017 - 2021',
      org: 'Jawaharlal Nehru Technology University (Kakinada)',
      description: ''
    },
    {
      title: 'Board of Intermediate Education (MPC)',
      period: '2015 - 2017',
      org: 'Sri Chaitanya Junior College',
      description: ''
    },
    {
      title: 'Board of Secondary Education (SSC)',
      period: '2014 - 2015',
      org: 'Amar Concept School',
      description: ''
    }
  ];

  employment: EmploymentItem[] = [
    {
      title: 'Software Quality Engineer',
      period: 'Oct 2022 - Present',
      org: 'Infor, Hyderabad',
      projects: [
        {
          name: 'Cloud Suite Portal',
          points: [
            'Led QA efforts by designing and executing 120+ test cases across functional, regression, and automation testing.',
            'Built a scalable automation framework from scratch using Selenium WebDriver, TestNG, and POM — improving test efficiency by 50%.',
            'Implemented automation testing strategies, reducing manual effort by ~30% (~15+ hours per sprint).',
            'Conducted API testing using Postman for multiple REST endpoints including authentication validation.',
            'Managed test case management and defect tracking using Jira and Zephyr.',
            'Integrated automation suite with Jenkins CI/CD pipelines for scheduled and unattended execution.'
          ]
        },
        {
          name: 'Solution Wizard',
          points: [
            'Performed end-to-end functional testing and regression testing for workflow-based modules.',
            'Designed and executed 80+ test cases ensuring strong coverage across business scenarios.',
            'Applied OOP concepts in automation scripts, reducing maintenance effort by 35%.',
            'Collaborated closely with developers and product teams to improve defect resolution turnaround.',
            'Actively participated in Agile ceremonies and contributed to continuous improvements.'
          ]
        }
      ]
    },
    {
      title: 'Application Development Associate',
      period: 'Sep 2021 - Oct 2022',
      org: 'Accenture, Bangalore',
      projects: [
        {
          name: 'AEM Training & Certification',
          points: [
            'Completed intensive training on Adobe Experience Manager (AEM), a leading enterprise content management platform.',
            'Gained hands-on expertise in AEM\'s drag-and-drop authoring interface for building and managing web applications.',
            'Learned AEM core concepts including templates, components, content fragments, and workflows.'
          ]
        },
        {
          name: 'Web Application Development (AEM)',
          points: [
            'Developed reusable AEM components and templates to streamline web page creation for client projects.',
            'Authored and published web pages using AEM\'s content authoring tools, ensuring brand consistency and responsiveness.',
            'Collaborated with design and backend teams to integrate custom components into the AEM platform.',
            'Contributed to content migration and page structuring for improved site performance and user experience.'
          ]
        }
      ]
    }
  ];

  aiInnovation: AiItem[] = [
    {
      icon: 'bi-cpu',
      title: 'Amazon Q Integration',
      text: 'Leveraging Amazon Q for 7+ months to enhance testing workflows with prompt engineering and structured prompting techniques.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'AI-Assisted Test Generation',
      text: 'Using AI tools to generate test scenarios, debug automation scripts, and significantly improve test coverage.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Efficiency Boost',
      text: 'Reduced test design effort and improved overall efficiency using AI-assisted automation strategies.'
    }
  ];

  achievements: Achievement[] = [
    { icon: 'bi-award', text: 'Recognized for outstanding performance and contribution to automation initiatives' },
    { icon: 'bi-arrow-up-circle', text: 'Received promotion for strong performance and consistent delivery' }
  ];
}
