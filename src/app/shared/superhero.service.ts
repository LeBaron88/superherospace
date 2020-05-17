import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuperHero } from './superheroInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  accessToken = '136821957948463';
  url = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/';

  superheroes: SuperHero[] = [];
  constructor(private httpClient: HttpClient ) { }

  loadSuperHeroes(name: string): Observable<SuperHero[]> {
    return this.httpClient.get<SuperHero[]>(this.url + this.accessToken + '/search/' + name);
  }

  getSuperheroes(): SuperHero[] {
    return this.superheroes;
  }

  setFavorite(id: number) {
    this.superheroes[id].favorite = !this.superheroes[id].favorite;
  }
}
