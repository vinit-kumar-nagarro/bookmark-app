import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bookmark, Folder, IBookmarkDialogData } from '../shared/models';
import { FavouriteService } from '../shared/services/favourite/favourite.service';
import { BookmarkDialogComponent } from '../shared/dialogs/bookmark-dialog/bookmark-dialog.component';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  favourits: Bookmark[] = [];
  folders: Folder[] = [];

  constructor(
    private favouriteService: FavouriteService,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getFavourites();
    this.getFolders();
  }

  getFavourites() {
    this.favouriteService.getFavouriteBookmarks().subscribe(
      res => {
        this.favourits = res.data;
      }
    );
  }

  getFolders() {
    this.dashboardService.getFolders().subscribe(
      res => {
        this.folders = res.data;
      }
    );
  }

  onUpdateBookmark(bookmark: Bookmark) {
    const data: IBookmarkDialogData = { bookmark, folderList: this.folders };
    const dialogRef = this.dialog.open(BookmarkDialogComponent, { width: '500px', data });
    dialogRef.afterClosed().subscribe(
      (result: IBookmarkDialogData) => {
        if (result) {
          this.dashboardService.updateBookmark(result.bookmark).subscribe(
            res => {
              this.getFolders();
              this.getFavourites();
              this.snackBar.open(res.message, 'Done', { duration: 4000 });
            },
            err => {
              this.snackBar.open(err.message, 'Error', { duration: 4000 });
            }
          );
        }
      }
    );
  }

  onDeleteBookmark(bookmark: Bookmark) {
    this.dashboardService.deleteBookmark(bookmark._id).subscribe(
      res => {
        this.getFavourites();
        this.snackBar.open(res.message, 'Done', { duration: 4000 });
      },
      err => {
        this.snackBar.open(err.message, 'Error', { duration: 4000 });
      }
    );
  }

}
