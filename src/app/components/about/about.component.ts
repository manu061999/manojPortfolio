import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: any;

  photos = [
    'assets/gallery/me.jpg',
    'assets/gallery/1000081594.jpg',
    'assets/gallery/1000081596.jpg',
    'assets/gallery/1000091103.jpg',
    'assets/gallery/1000099319.jpg',
    'assets/gallery/1000106003.jpg'
  ];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.photos.length;
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
  professionalHighlights = [
    { icon: 'bi-shield-check', text: 'SDET with 4 years of experience in automation testing, QA, and test execution within Agile environments.' },
    { icon: 'bi-gear', text: 'Built scalable automation frameworks from scratch using Java, Selenium WebDriver, TestNG, and POM — improving efficiency by 50%.' },
    { icon: 'bi-send', text: 'Strong experience in API testing (Postman), CI/CD integration (Jenkins), and defect management (Jira, Zephyr).' },
    { icon: 'bi-robot', text: 'Leveraging GenAI tools like Amazon Q and Kiro with proficiency in prompt engineering to enhance testing workflows.' },
    { icon: 'bi-trophy', text: 'Recognized for outstanding performance and received promotion for consistent delivery at Infor.' }
  ];

  personalHighlights = [
    { icon: 'bi-music-note-beamed', text: 'Music is my therapy' },
    { icon: 'bi-emoji-smile', text: 'Love dancing' },
    { icon: 'bi-car-front', text: 'Long drives with good music' },
    { icon: 'bi-palette', text: 'Fashion & aesthetics' },
    { icon: 'bi-egg-fried', text: 'Home chef who loves experimenting' },
    { icon: 'bi-scissors', text: 'Craft work & DIY projects' },
    { icon: 'bi-peace', text: 'Calm & composed vibes' },
    { icon: 'bi-book', text: 'Always learning something new' }
  ];

  traits = [
    { icon: 'bi-fire', label: 'Creative' },
    { icon: 'bi-lightning', label: 'Driven' },
    { icon: 'bi-heart-pulse', label: 'Passionate' },
    { icon: 'bi-stars', label: 'Aesthetic' },
    { icon: 'bi-cup-hot', label: 'Calm' },
    { icon: 'bi-hand-thumbs-up', label: 'Team Player' }
  ];
}
