import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  formStatus: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  async onSubmit(form: NgForm): Promise<void> {
    this.formStatus = 'sending';
    try {
      const res = await fetch('https://formspree.io/f/mleyoaja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });
      this.formStatus = res.ok ? 'sent' : 'error';
      if (res.ok) {
        this.formData = { name: '', email: '', subject: '', message: '' };
        form.resetForm();
      }
    } catch {
      this.formStatus = 'error';
    }
  }
}
