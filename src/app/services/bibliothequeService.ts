import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Livre} from '../models/livre';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BibliothequeService {

  private livres: Livre[];
  private messageSource = new BehaviorSubject(this.livres);
  currentMessage = this.messageSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  changeMessage(livresApi: Livre[]) {
    this.messageSource.next(livresApi);
  }

  api(titre: string) {
    return this.http.get<Livre>('https://www.googleapis.com/books/v1/volumes?q=' + titre, this.httpOptions);

  }
}
