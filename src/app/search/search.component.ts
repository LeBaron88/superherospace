import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mot = '';
  errorText = '';
  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    if(this.mot.length < 4) {
      this.errorText = 'La recherche doit comporter plus de 3 lettres';
    }
    else {
      this.errorText = this.mot;
    }
  }

}
