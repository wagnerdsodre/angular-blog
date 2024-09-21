import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

 URLPOST:string = environment.API_URL_POSTS
 URLPHOTOS:string = environment.API_URL_PHOTOS
 private http = inject(HttpClient)

 getPosts():Observable<any>{
  return this.http.get(this.URLPOST, { observe:'response' })
}

 getPhotos():Observable<any>{
  return this.http.get(this.URLPHOTOS, { observe:'response' })
}















}
