import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../shared/dataInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  objectKeys = Object.keys;
  superhero: SuperHero;
  data: IData;

  constructor(private superheroService: SuperheroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.superheroService.superheroes$.subscribe( sh => {
        this.superhero = sh.find(superhero => (superhero.id as unknown as string) === params.get('id'));
      });
    });
    this.data = this.superheroService.getData();
  }

  addFavorite() {
    this.superheroService.setFavorite(this.superhero.id);
  }

}
