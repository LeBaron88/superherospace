import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuperHero } from './superheroInterface';
import { Observable, BehaviorSubject } from 'rxjs';
import { IData } from './dataInterface';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  accessToken = '136821957948463';
  url = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/';

  private superheroes = new BehaviorSubject<SuperHero[]>([]);
  superheroes$ = this.superheroes.asObservable();

  data: IData = { link: '/search', searchWord: '', ids: []};
  constructor(private httpClient: HttpClient ) { }

  loadSuperHeroes(name: string): Observable<SuperHero[]> {
    return this.httpClient.get<SuperHero[]>(this.url + this.accessToken + '/search/' + name);
  }

  setFavorite(id: number) {

    let shTemp: SuperHero[] = this.superheroes.getValue();
    shTemp.forEach( superhero => {
      if (superhero.id === id) {
        superhero.favorite = !superhero.favorite;
      }
    });

    this.superheroes.next(shTemp);
  }

  updateSuperheroes(sh: SuperHero[]) {
    let shTemp: SuperHero[] = this.superheroes.getValue();
    shTemp = shTemp.filter(superhero => superhero.favorite === true);
    sh.forEach(superhero => {
      if (!this.shIncluded(shTemp, superhero)) {
        shTemp.push(superhero);
      }
    });
    this.superheroes.next(shTemp);
  }

  shIncluded(sh: SuperHero[], superhero: SuperHero) {
    if (sh.some(e => e.id === superhero.id)) { return true; }
    return false;
  }

  getData(): IData {
    return this.data;
  }

  setData(dt: IData) {
    this.data = dt;
  }
}
