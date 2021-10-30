import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollerModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
