import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.httpClient.put('https://ng-recipe-book-9c156.firebaseio.com/recipes.json',
                        this.recipeService.getRecipes(), {
        observe: 'body', // (response/event...)
        responseType: 'json' // (text/blob/arrayBuffer...)
        // headers: new HttpHeaders().set();
        // params: new HttpParams().set('auth', token);
      });

    // if we want to track progress
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-9c156.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-9c156.firebaseio.com/recipes.json')
      .pipe(
        tap(
          (recipes: Recipe[]) => {
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
          }
        )
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }



}
