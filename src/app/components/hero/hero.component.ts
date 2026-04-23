import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  particles = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100 + '%',
    duration: (Math.random() * 10 + 8) + 's',
    delay: (Math.random() * 5) + 's',
    size: (Math.random() * 6 + 2) + 'px'
  }));

  ngAfterViewInit(): void {
    new Typed(this.typedElement.nativeElement, {
      strings: [
        'Bug Hunter by Profession 🐛',
        'Biryani Chef by Passion 🍳',
        'Selenium Whisperer 🤖',
        'Code Breaker, Not Heartbreaker 💔',
        'Prompt Engineer (yes, I talk to AI) 🧠',
        'Dance Floor Destroyer 💃',
        'Long Drive Enthusiast 🚗',
        'Fashion Forward, Code Backward 👔',
        'Quality Engineer at Work, Quality Human in Progress ✨'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 800,
      loop: true
    });
  }
}
