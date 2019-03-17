import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, // contains CommonModule and a few Modules required for starting an app
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    AppRoutingModule
    // This is required to ensure that the Catch-all/ wildcard routes work correctly.
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
