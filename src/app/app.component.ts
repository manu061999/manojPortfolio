import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showScrollTop = false;
  showSplash = true;
  splashFading = false;

  sparkles = Array.from({ length: 15 }, () => ({
    left: (20 + Math.random() * 60) + '%',
    top: (30 + Math.random() * 40) + '%',
    delay: (1.5 + Math.random() * 1.5) + 's'
  }));

  signatureLetters = 'Manoj Kumar Diddi'.split('');
  taglineLetters = 'Quality Engineer • Creative Soul'.split('');

  bgLines = Array.from({ length: 8 }, () => ({
    left: Math.random() * 100 + '%',
    dur: (4 + Math.random() * 6) + 's',
    delay: (Math.random() * 3) + 's'
  }));

  ngOnInit(): void {
    // Splash screen timing
    setTimeout(() => { this.splashFading = true; }, 3000);
    setTimeout(() => {
      this.showSplash = false;
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }, 3800);

    // Remove old preloader
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.remove();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 100;
  }

  scrollToTop(e: Event): void {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
