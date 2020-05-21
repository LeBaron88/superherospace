import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';

import * as M from 'materialize-css';1

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('favBtn') favBtn: ElementRef;
  @ViewChild('remBtn') remBtn: ElementRef;

  @Input('superhero') superhero: SuperHero;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit() {}

  addFavorite() {
    this.superheroService.setFavorite(this.superhero.id);
  }

  ngAfterViewInit() {
    if (!this.superhero.favorite) {
      M.Tooltip.init(this.favBtn.nativeElement);
    } else {
      M.Tooltip.init(this.remBtn.nativeElement);
    }
  }

}
