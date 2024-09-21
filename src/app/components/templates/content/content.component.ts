import { Component, inject, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { forkJoin } from 'rxjs';
import { JsonPlaceholderService } from 'src/app/core/json-placeholder.service';

interface IPostAndPhotos {
  id: number,
  userId:number
  body:string,
  photo:string,
  title:string,
  url:string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  dataPosts:IPostAndPhotos[] =[]
  dataPhotos:IPostAndPhotos[] =[]
  dataPostsAndPhotos:IPostAndPhotos[] =[]
  searchTerm:string = ''
  filteredPosts:IPostAndPhotos[] =[]

  constructor(private service: JsonPlaceholderService) {}

  ngOnInit() {
    forkJoin({
      posts: this.service.getPosts(),
      photos: this.service.getPhotos()
    }).subscribe(({ posts, photos }) => {

      this.dataPosts = posts.body;
      this.dataPhotos = photos.body;

      this.dataPostsAndPhotos = this.dataPosts.map((post, index) => ({
        ...post,
        photo: this.dataPhotos[index]?.url
      }));

    });
  }



}
