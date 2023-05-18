import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

type ImageGroup = { 
  url:string;
  caption:string
}
@Component({
  selector: 'app-image-slider-modal',
  templateUrl: './image-slider-modal.component.html',
  styleUrls: ['./image-slider-modal.component.scss']
})

export class ImageSliderModalComponent implements OnInit {
  @Input() images: ImageGroup[] = [];
  isOpen = false;
  currentIndex = 0;

  constructor(private modalService:ModalService){}

  ngOnInit() {
    this.modalService.modalOpen.subscribe(value=> {
     if(value)
        this.openModal();
      else
        this.closeModal();
    })
  }

  openModal(): void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }

  getCurrentImage(): string {
    return this.images[this.currentIndex].url;
  }
  getCurrentCaption(): string {
    return this.images[this.currentIndex].caption;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
