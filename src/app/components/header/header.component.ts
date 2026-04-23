import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  mobileNavOpen = false;

  navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Life & Vibes', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  socialLinks = [
    { icon: 'bi-instagram', url: 'https://www.instagram.com/itsmanoj.vibes/', label: 'Instagram', color: '#E4405F' },
    { icon: 'bi-github', url: 'https://github.com/manu061999', label: 'GitHub', color: '#181717' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/diddimanojkumar/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: 'bi-snapchat', url: 'https://www.snapchat.com/add/muff.inhead', label: 'Snapchat', color: '#FFFC00' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }
}
