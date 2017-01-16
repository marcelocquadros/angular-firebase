import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookmark-edit',
  template: `
     <div>
     
        <div class="mdl-textfield mdl-js-textfield">
          <input [(ngModel)]="bookmark.title"
                 class="mdl-textfield__input" type="text" id="sample3">
          <label class="mdl-textfield__label" for="sample3">Title</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input [(ngModel)]="bookmark.url"
               class="mdl-textfield__input" type="text" id="sample2">
          <label class="mdl-textfield__label" for="sample3">Url</label>
        </div>
        
        <button (click)="onSave()"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Save
        </button>
        <button (click)="onClear()"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--secondary">
            Clear
        </button>
     </div>
  `
})
export class BookmarkEditComponent {
  
  @Input() bookmark = {};

  @Output() save = new EventEmitter(); 
  @Output() clear = new EventEmitter(); 

  onSave() {
    this.save.emit(this.bookmark);
  }

  onClear() {
    this.clear.emit();
  }
}
