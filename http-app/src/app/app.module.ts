import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { youTubeSearchInjectables } from './you-tube-search.injectables';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    SearchResultComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
