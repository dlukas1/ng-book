import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { RecipieStartComponent } from './recipie/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  { path: 'recipies', component: RecipieListComponent, children: [
    {path:'', component: RecipieStartComponent},
    {path:'new', component: RecipieEditComponent},
    {path:':id', component: RecipieDetailComponent},
    {path:':id/edit', component: RecipieEditComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
