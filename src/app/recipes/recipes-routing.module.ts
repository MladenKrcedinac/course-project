import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '',  component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      { path: ':index', component: RecipeDetailComponent},
      { path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
      // child routes with dynamic parameters always goes under static parameters
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)], // method forChild se poziva u svim ostalim feature (child) modulima
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
