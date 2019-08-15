import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipieService } from '../services/recipie.service';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {

selectedRecipie: Recipie;

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
    this.recipieService.recipieSelected
    .subscribe((recipie: Recipie) => {
      this.selectedRecipie = recipie;
    })
  }

}
