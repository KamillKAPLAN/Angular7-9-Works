import {Component, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
    constructor(private router: Router) {
    }

    // @ts-ignore
    @ViewChild('slides') slides: IonSlides;

    nextMsg = 'Hadi Başlayalım';

    next() {
        this.slides.slideNext();
    }

    finish() {
        this.router.navigateByUrl('home');
    }
}
