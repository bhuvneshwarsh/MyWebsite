import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/authservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

constructor(public authservice: AuthService) { }

  images = [
    { src: 'assets/CollegeImage.jpg', alt: 'Image 1', desc: 'Last Pic From College | 2020' },
    { src: 'assets/freshersParty.jpg', alt: 'Image 2', desc: 'Freshers Party celebration | 2017' },
    { src: 'assets/Yashu-bhuvi.jpg', alt: 'Image 3', desc: 'One with my Niece | 2016' },
    { src: 'assets/With_Didi.jpg', alt: 'Image 4', desc: 'One with my sister | 2019' },
    { src: 'assets/with_Maasi.jpg', alt: 'Image 5', desc: 'One with my Maasi | 2018' },
    { src: 'assets/DuringStudies.jpg', alt: 'Image 6', desc: 'During Studies | 2022' },
    { src: 'assets/One-professional-pose.jpg', alt: 'Image 7', desc: 'One professional pose | 2020' }
    

    // Add more images here
  ];

  lightboxOpen = false;
  currentIndex = 0;

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

}
