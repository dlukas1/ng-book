import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { SpotyfyService } from '../services/spotify-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

 constructor(private spotify: SpotyfyService,
 private router: Router,
 private route: ActivatedRoute) { 
   this.route.queryParams.subscribe(params => {
     this.query = params['query'] || '';
   })
  }

  ngOnInit():void {
    this.search();
  }

  search(): void{
    console.log('Query: ', this.query);
    if(!this.query){
      return;
    }
    this.spotify.searchTrack(this.query)
    .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if(res && res.tracks.items){
      this.results = res.tracks.items;
    }
  }

  submit(query: string): void{
    this.router.navigate(['search'], {
      queryParams:{
        query: query
      }
    }).then(_ => this.search());
  }

}
