import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'youtube-search',
  templateUrl: './youtube-search.component.html'
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }
  updateResults(results: SearchResult[]): void{
    this.results = results;
  }
}
