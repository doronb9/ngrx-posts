import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PostsModule } from './components/posts/posts.module';
import { postsReducer } from './store/posts.reducer';
import { HttpClientModule } from '@angular/common/http';
import { pageReducer } from './store/page-store/page.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    StoreModule.forRoot({ posts: postsReducer, page: pageReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
