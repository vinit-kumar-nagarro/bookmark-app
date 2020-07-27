import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkDialogComponent } from './dialogs/bookmark-dialog/bookmark-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { BoomarkItemComponent } from './components/bookmark-item/boomark-item/boomark-item.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [BookmarkDialogComponent, BoomarkItemComponent, FilterPipe],
  entryComponents: [BookmarkDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    BoomarkItemComponent,

    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    FilterPipe
  ]
})
export class SharedModule { }
