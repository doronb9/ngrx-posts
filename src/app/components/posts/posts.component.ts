import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { nextPage } from 'src/app/store/page-store/page.actions';
import { selectPage } from 'src/app/store/page-store/page.selectors';
import { getPosts } from 'src/app/store/posts.actions';
import { selectPosts } from 'src/app/store/posts.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {


  constructor(private store: Store, private postsService: PostsService) {
    this.posts$ = this.store.select(selectPosts);
    this.page$ = this.store.select(selectPage);
  }

  posts$: Observable<PostModel[]>;

  page$: Observable<number>;

  page: number = 0;

  posts: PostModel[] = [];

  isLastPage = false;

  isLoading = false;

  ngOnInit(): void {
    this.page$.subscribe(page => this.page = page);
    this.getPosts();
  }


  getPosts() {
    // set isLoading so the function doesnt run twice
    this.isLoading = true;
    this.postsService.getPosts(this.page, environment.postsNext).subscribe(res => {
      this.isLastPage = res.isLastPage;
      this.posts = res.posts;
      this.store.dispatch(getPosts({ posts: res.posts }));
      if (!res.isLastPage) this.store.dispatch(nextPage());
      this.isLoading = false;
    });

  }





  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isLoading) return;
    // the postition to exc get posts
    if (window.innerHeight + window.scrollY + 35 > document.body.offsetHeight) {
      if (!this.isLastPage) this.getPosts();
    }

  }


}
