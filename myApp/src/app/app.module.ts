import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ArticleComponent } from './article/article.component';
import { GlobalfeedComponent } from './globalfeed/globalfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    GlobalfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
