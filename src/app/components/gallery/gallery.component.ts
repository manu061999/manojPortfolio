import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InstaPost {
  id: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
  mediaType: string;
  videoUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  posts: InstaPost[] = [];
  loading = true;
  error = false;

  private feedUrl = 'https://feeds.behold.so/Cn8y1rSZZ3jKyHdU95PD';

  async ngOnInit(): Promise<void> {
    try {
      const res = await fetch(this.feedUrl);
      const data = await res.json();
      this.posts = (data.posts || []).slice(0, 6).map((p: any) => ({
        id: p.id,
        mediaUrl: p.sizes?.medium?.mediaUrl || p.mediaUrl || '',
        caption: p.caption || '',
        permalink: p.permalink || '',
        timestamp: p.timestamp || '',
        mediaType: p.mediaType || 'IMAGE',
        videoUrl: p.mediaType === 'VIDEO' ? p.mediaUrl : ''
      }));
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  playVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video?.play();
  }

  pauseVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video?.pause();
  }
}
