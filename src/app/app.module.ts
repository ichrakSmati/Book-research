import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { GalerieComponent } from './galerie/galerie.component';
import {FormsModule} from '@angular/forms';
import {BibliothequeService} from './services/bibliothequeService';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './galerie/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatOptionModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './galerie/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    GalerieComponent,
    FilterPipe,
    PopupComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [PopupComponent],
  providers: [BibliothequeService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
