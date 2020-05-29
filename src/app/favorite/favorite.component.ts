import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';
import { IData } from '../shared/dataInterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  superheroesFav: SuperHero[];
  data: IData;
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
   this.superheroService.superheroes$.subscribe(sh => this.superheroesFav = sh.filter(superhero => superhero.favorite === true));
   this.data = this.superheroService.getData();
   this.data.link = '/favorite';
   this.data.searchWord = '';
   this.data.ids = [];
   this.superheroService.setData(this.data);
  }

}
