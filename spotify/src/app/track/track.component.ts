import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../services/spotify-service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html'
})
export class TrackComponent implements OnInit {

  id: string;
  track: Object;

  constructor(private route: ActivatedRoute,
    private spotify: SpotyfyService, private location: Location) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotify.getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }
  renderTrack(res: any): void {
    this.track = res;

  }

}