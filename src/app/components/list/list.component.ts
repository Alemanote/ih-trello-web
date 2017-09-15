import { ListService } from '../../shared/services/list.service';
import { CardService } from './../../shared/services/card.service';
import { List } from './../../shared/models/list.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: List;
  @Output() onRemove = new EventEmitter<List>();
  @Output() onEdit = new EventEmitter<List>();

  constructor(
    private cardService: CardService,
    private listService: ListService
  ) { }

  ngOnInit() { }

  removeList() {
    // TODO: Implement
  }

  removeCard(cardId) {
    // TODO: Implement
  }

  editList(title) {
    // TODO: Implement
  }

  addCard(title) {
    // TODO: Implement
  }
}
