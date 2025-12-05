import { Component, signal } from '@angular/core';
import { blackbackground } from '../background_component';
import { contactinfocomponent } from '../contact-info.component';
import { sociallinkcomponent } from "../social-media-component";
import { Navigation } from "../navigation/navigation";
import { midcomponent } from '../middle-part';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    blackbackground,
    contactinfocomponent,
    sociallinkcomponent,
    Navigation,
    midcomponent
],
  templateUrl:'./home.html',
  styleUrl: './home.css'
})
export class home {}
