import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {

  @Input() placeholder: string;
  @Output() onSave = new EventEmitter<string>();
  isEditing = false;
  title: string;

  constructor() { }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  save() {
    // TODO: Implement
  }
}
