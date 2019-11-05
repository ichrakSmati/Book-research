import { Component, OnInit } from '@angular/core';
import {Livre} from '../models/livre';
import {BibliothequeService} from '../services/bibliothequeService';
import {Router} from '@angular/router';

@Component({
  selector: 'adz-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  value: string;

  constructor(private bibliothequeServie: BibliothequeService, private router: Router) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/livres/' + this.value]);
  }

}

