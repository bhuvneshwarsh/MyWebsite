import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  imports: [],
  templateUrl: './common.html',
  styleUrl: './common.css'
})
export class Common {
  fullText: string = 'Welcome to My world !';
  displayedText: string = '';
  private typingSpeed: number = 50; // ms per character
  private erasingSpeed: number = 50; // ms per character
  private delayBetween: number = 1500; // ms before erasing/writing again

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    let charIndex = 0;
    const type = () => {
      if (charIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(charIndex);
        charIndex++;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(erase, this.delayBetween);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        charIndex--;
        setTimeout(erase, this.erasingSpeed);
      } else {
        setTimeout(type, this.delayBetween);
      }
    };

    type();
  }
}
