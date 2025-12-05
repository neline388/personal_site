import { Component } from '@angular/core';
@Component({
    selector: 'app-black-background',
    standalone: true,
    template: `<ng-content></ng-content>`,
    styles: [`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        margin: 0;
        padding: 0;
        z-index: -1;
      }
    `]
  })
export class blackbackground{}
 