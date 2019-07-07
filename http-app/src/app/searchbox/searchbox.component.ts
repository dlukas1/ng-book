import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { SearchResult } from '../search-result.model';
import { YouTubeSearchService } from '../youtube-search-service';

@Component({
  selector: 'searchbox',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchboxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> 
    = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> 
    = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
    .pipe (
        map((e:any) => e.target.value), // extract the value of the input

        // filter((text:string) => text.length > 1), //filter out if empty

        debounceTime(250), //only search after 250 ms

        tap(() => this.loading.emit(true)), // Enable loading
        // search, call the search service

        map((query:string) => this.youtube.search(query)) ,
        // discard old events if new input comes in

        switchAll()
        // act on the return of the search
        )  // enable loading
    .subscribe( // act on the return of the search
      (result: SearchResult[])=> { // on success
        this.loading.emit(false);
        this.results.emit(result);
      }, 
      (err: any) => { //on error
        console.log(err);
        this.loading.emit(false);
      },
      () => { //on completion
        this.loading.emit(false);
      }
    );
  }

}
