import {Component, OnInit} from '@angular/core';
import {BibliothequeService} from '../services/bibliothequeService';
import {ActivatedRoute, Params} from '@angular/router';
import {Livre} from '../models/livre';
import {MatDialog} from '@angular/material';
import {Item} from '../models/item';
import {PopupComponent} from './popup/popup.component';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'adz-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css'],
})
export class GalerieComponent implements OnInit {

  titre: string;
  author: string;
  livres: Livre;
  selectedOption: number;
  publishedDates: number[] = [];

  constructor(private bibliothequeServie: BibliothequeService, private route: ActivatedRoute, public dialog: MatDialog, private filterPipe: FilterPipe) { }

  ngOnInit() {

    this.livres = new Livre();
    this.route.params.forEach((params: Params) => {
      this.titre = params['titre'];
    });
    this.bibliothequeServie.api(this.titre).subscribe(data => {
      this.livres = data;
      this.fillSelect(this.livres.items, null);
    });
  }


  openDialog(livre: Item): void {
    this.dialog.open(PopupComponent, {
      width: '800px',
      data: {
        title: livre.volumeInfo.title,
        publishedDate: livre.volumeInfo.publishedDate,
        pageCount: livre.volumeInfo.pageCount,
        printType: livre.volumeInfo.printType,
        language: livre.volumeInfo.language,
        previewLink: livre.volumeInfo.previewLink,
        description: livre.volumeInfo.description,
      }
    });
  }

  fillSelect(items: Item[], author: string) {
    this.publishedDates = [];
    for (let item of this.filterPipe.transform(items, author, null) ) {
      if (item.volumeInfo.publishedDate) {
        if (this.publishedDates.indexOf(item.volumeInfo.publishedDate) === -1) {
          this.publishedDates.push(item.volumeInfo.publishedDate);

        }
      }
    }
  }
  filterSelect(items: Item[], author: string, au: number) {
    this.livres.items = this.filterPipe.transform(items, author, au);
    this.fillSelect(this.livres.items, author);

  }

}


