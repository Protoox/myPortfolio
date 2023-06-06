import { Component, Input, OnInit } from '@angular/core';

declare var particlesJS: any; // Required to be properly interpreted by TypeScript.


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', function() {console.log('callback - particles.js config loaded'); })
  
  }

  

}
