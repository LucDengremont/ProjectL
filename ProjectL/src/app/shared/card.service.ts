import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[];

  constructor(private httpClient: HttpClient) { }

  getCards() {
    if (this.cards) {
      return of (this.cards);
    }

    return this.getCardFromServer().pipe(tap(cards => this.cards = cards));
  }

  deleteCard(cardId: number) {
    this.cards = this.cards.filter(card => card.id !== cardId);
    return of (this.cards);
  }

  private getCardFromServer() {
    return this.httpClient.get<Card[]>('http://localhost:3000/cards');
  }
}
