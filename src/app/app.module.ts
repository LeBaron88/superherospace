import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SuperheroService } from './shared/superhero.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoriteComponent,
    NavbarComponent,
    ProfileComponent,
    HeroDetailsComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
