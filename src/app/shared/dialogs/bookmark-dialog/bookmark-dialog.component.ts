import { Component, OnInit, Inject } from '@angular/core';
import { IBookmarkDialogData } from '../../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bookmark-dialog',
  templateUrl: './bookmark-dialog.component.html',
  styleUrls: ['./bookmark-dialog.component.scss']
})
export class BookmarkDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookmarkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBookmarkDialogData
  ) { }

  ngOnInit() { }

  onSelectFolder() {
    if (this.data.bookmark.folderId) {
      const folder = this.data.folderList.find(it => it._id === this.data.bookmark.folderId);
      this.data.bookmark.folderName = folder.name;
    } else {
      this.data.bookmark.folderName = '';
    }
  }

  save() {
    this.dialogRef.close(this.data);
  }

}
