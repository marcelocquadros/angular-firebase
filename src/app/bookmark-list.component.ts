import { Component, Input, Output, EventEmitter }  from '@angular/core';

@Component({
  selector: 'bookmark-list',
  template: `
     <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th>title</th>
            <th>Url</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let bookmark of bookmarks">
            <td>
              <a [href]="bookmark.url" target="_blank"> {{bookmark.title}}</a>
            </td>
            <td>
              <a [href]="bookmark.url" target="_blank"> {{bookmark.url}}</a>
            </td>
            <td>
               <button (click)="onEdit(bookmark)" 
                        class="mdl-button mdl-js-button mdl-button--primary">
                  Edit
                </button>
                <button (click)="onRemove(bookmark)" 
                        class="mdl-button mdl-js-button mdl-button--accent">
                  Delete
                </button>
            </td>
          </tr>
        <tbody>
     </table>
  `
})
export class BookmarkListComponent {

   @Input() bookmarks = [];

   @Output() remove = new EventEmitter();
   @Output() edit = new EventEmitter();

   onRemove(bookmark) {
     this.remove.emit(bookmark)
   }

   onEdit(bookmark) {
     this.edit.emit(bookmark);
   }
}
