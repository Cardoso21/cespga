import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    images = [
        'assets/images/carousel/1.jpg','assets/images/carousel/2.jpg','assets/images/carousel/3.jpg','assets/images/carousel/4.jpg',
    ];

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 4000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;


    }

  ngOnInit(): void {
  }

}
