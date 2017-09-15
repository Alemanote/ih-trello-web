import { ToastService } from '../../shared/services/toast.service';
import { ListService } from '../../shared/services/list.service';
import { List } from './../../shared/models/list.model';
import { ApiError } from './../../shared/models/api-error.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: Array<List> = [];
  showAddList = false;

  constructor(
    private listService: ListService,
    private toastService: ToastService,
    private vcr: ViewContainerRef
  ) {
    this.toastService.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.listService.getAll().subscribe(
      lists => this.lists = lists,
      error => this.toastService.onError(error)
    );
  }

  toggleAddList() {
    this.showAddList = !this.showAddList;
  }

  addList(title: string) {
    this.listService.create(title).subscribe(
      list => this.lists.push(list),
      error => this.toastService.onError(error)
    )
  }

  onEditList(list) {
    // TODO: implements edit
  }

  onDeleteList(list) {

  }

}
