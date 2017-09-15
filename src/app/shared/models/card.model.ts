import { Sortable } from './sortable.intefaze';

export class Card implements Sortable {
    _id: string;
    title: string;
    description?: string;
    dueDate: Date;
    list: string;
    position: number = 0;
    createdAd: Date;
    updatedAt: Date;
}
