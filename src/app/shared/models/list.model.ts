import { Sortable } from './sortable.intefaze';
import { Card } from './card.model';

export class List implements Sortable {
    _id: string;
    title: string;
    position: number = 0;
    cards: Array<Card> = [];
    createdAd: Date;
    updatedAt: Date;
}
