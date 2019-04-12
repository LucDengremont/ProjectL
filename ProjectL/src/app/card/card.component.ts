import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  cards: Card[];

  constructor(private card: CardService) { }

  ngOnInit() {
    this.card
      .getCards()
      .subscribe((data: Card[]) => {
        this.cards = data
        console.log(this.cards)
      });
  }

}
