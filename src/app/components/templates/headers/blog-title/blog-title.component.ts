import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  templateUrl: './blog-title.component.html',
  styleUrls: ['./blog-title.component.scss']
})
export class BlogTitleComponent {
  @Input() title:string = ''
  @Input() subtitle:string = ''

}
