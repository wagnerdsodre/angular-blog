import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { GlobalsModule } from './shared/globals/globals.module';
import { HeaderComponent } from './components/templates/headers/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { ContentComponent } from './components/templates/content/content.component';
import { RedDirective } from './directives/red.directive';
import { BlogTitleComponent } from './components/templates/headers/blog-title/blog-title.component';
import { CardComponent } from './components/views/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RedDirective,
    BlogTitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GlobalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
