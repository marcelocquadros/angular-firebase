import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <bookmark-edit [bookmark]="editableBookmark"
                    (save)="save($event)"
                    (clear)="clear()">
     </bookmark-edit>
     <bookmark-list (remove)="remove($event)" 
                    (edit)="edit($event)"
                    [bookmarks]="bookmarks">
    </bookmark-list>
  `
})
export class AppComponent implements OnInit{
  
  bookmarks = [];
  editableBookmark = {};

  constructor(private bookmarkService: BookmarkService){
    this.bookmarkService.errorHandler = error => window.alert('Ops! Something went wrong!');
  }

  ngOnInit() {
   this.reload();
  }

  

  save(bookmark) {
    if(bookmark.id) {
       this.bookmarkService.updateBookmark(bookmark)
        .then(() =>  this.reload());
    } else {
       this.bookmarkService.addBookmark(bookmark)
        .then(() =>  this.reload());
    }
    this.clear();
   
  }

  edit(bookmark) {
    this.editableBookmark = Object.assign({}, bookmark);
  }

  remove(bookmark) {
    this.bookmarkService.removeBookmark(bookmark)
    .then(() => this.reload());
  }

  clear() {
    this.editableBookmark = {};
  }


  private reload() {
     this.bookmarkService.getBookmarks()
      .then(resp => this.bookmarks = resp);
  }
}
