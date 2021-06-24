import { Component, OnInit } from '@angular/core';
import {
  ScrollToService,
  ScrollToConfigOptions,
} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  scrollTrigger(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      easing: 'easeOutElastic',
      duration: 400,
    };

    this.scrollToService.scrollTo(config);
    }

}
