import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class BookmarkService{

    private baseUrl = 'https://agenda-78d20.firebaseio.com';

    errorHandler = error => console.error('BookmarkService error', error);

    constructor(private http: Http){}

    getBookmarks(): any {
     return   this.http.get(`${this.baseUrl}/bookmarks.json`)
        .toPromise()
        .then(response => this.convert(response.json()))
        .catch(this.errorHandler);
    }

    addBookmark(bookmark) {
        const obj = JSON.stringify(bookmark);
        return  this.http.post(`${this.baseUrl}/bookmarks.json`,obj)
             .toPromise()
             .catch(this.errorHandler);;
    }

     updateBookmark(bookmark) {
        const obj = JSON.stringify({
            title: bookmark.title,
            url: bookmark.url
        });
        return  this.http.put(`${this.baseUrl}/bookmarks/${bookmark.id}.json`,obj)
             .toPromise()
             .catch(this.errorHandler);;
    }

    removeBookmark(bookmark) {
      return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`)
      .toPromise()
      .catch(this.errorHandler);;
    }

    private convert(parsedResponse) {
        return Object.keys(parsedResponse)
        .map(id => ({
            id: id,
            title: parsedResponse[id].title,
            url: parsedResponse[id].url
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
    }
}