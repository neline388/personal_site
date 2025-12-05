import { Component } from "@angular/core";
@Component({
    selector :'app-contact-info',
    standalone : true,
    template :`
    <div class = "contact-info">
        <p class = "phone">Cell: +39 3982918765 </p>
        <p class = "phone">Email: Negarlaleh1@gmail.com</p> 
    </div>`,
    styles:[`
        .contact-info{
            position: FIXED;
            bottom: 20px;
            left:20px;
            color: white;
            font-family: 'Garamond, serif';
            font-size: 14px;
            z-index: 1000;
        }
        .phone{
            margin: 4px 0;
            padding: 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
    `]
})
export class contactinfocomponent{}