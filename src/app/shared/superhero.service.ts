import { Injectable } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  superheroes: superHero[] = [
    {
      id: 0,
      name: 'Captain America',
      description: 'I am the captain',
      imgSrc: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/03/23/663884-590059-captain-america.jpg',
      favorite: true
    },
   {
      id: 1,
      name: 'Spiderman',
      description: 'I am just a human with powers',
      imgSrc: 'https://icdn2.digitaltrends.com/image/digitaltrends/spidermanraimisuitps4.jpg',
      favorite: false
    },
    {
      id: 2,
      name: 'Captain Marvel',
      description: 'I am pretty and badass',
      imgSrc: 'https://img1.looper.com/img/gallery/the-real-reason-captain-marvel-had-such-a-tiny-role-in-endgame/intro-1557949097.jpg',
      favorite: true
    },
    {
      id: 3,
      name: 'Thor',
      description: 'I am a god',
      imgSrc: 'https://img.cinemablend.com/filter:scale/quill/4/7/6/1/5/e/47615e765c155760d0e854273f6d17c374973830.jpg?mw=600',
      favorite: false
    },
    {
      id: 4,
      name: 'Iron Man',
      description: 'I am genius',
      imgSrc: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_mob_01_0.jpg',
      favorite: false
    }
  ];
  constructor() { }

  getSuperheroes(): superHero[] {
    return this.superheroes;
  }

  setFavorite(id: number) {
    this.superheroes[id].favorite = !this.superheroes[id].favorite;
  }
}
