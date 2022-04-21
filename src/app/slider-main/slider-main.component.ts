import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss']
})

export class SliderMainComponent implements AfterViewInit{

  panels = document.querySelectorAll('.container');
  floating_btn = document.querySelector('.floating-btn');
  close_btn = document.querySelector('.close-btn');
  social_panel_container = document.querySelector('.social-panel-container');

  constructor() {  }

  removeActiveClasses() {
    this.panels.forEach(panel => {
      panel.classList.remove('active');
    });
  }

  ngAfterViewInit(): void {
    this.panels.forEach(panel => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses();
        panel.classList.add('active');
      });
    });

    this.floating_btn?.addEventListener('click', () => {
      this.social_panel_container?.classList.toggle('visible')
    });

    this.close_btn?.addEventListener('click', () => {
      this.social_panel_container?.classList.remove('visible')
    });
  }

}
