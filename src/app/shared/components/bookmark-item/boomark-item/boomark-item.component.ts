import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bookmark } from 'src/app/shared/models';

@Component({
  selector: 'app-boomark-item',
  templateUrl: './boomark-item.component.html',
  styleUrls: ['./boomark-item.component.scss']
})
export class BoomarkItemComponent implements OnInit {

  @Input() bookmark: Bookmark;
  @Output() updateBookmark = new EventEmitter<Bookmark>();
  @Output() deleteBookmark = new EventEmitter<Bookmark>();

  constructor() { }

  ngOnInit() {
  }

  editBookmark() {
    this.updateBookmark.emit(Object.assign({}, this.bookmark));
  }

  onDeleteBookmark() {
    this.deleteBookmark.emit(Object.assign({}, this.bookmark));
  }

}
