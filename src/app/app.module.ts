import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/page/home-page/home-page.component';
import {CreatePageComponent} from './components/page/create-page/create-page.component';
import {PostPageComponent} from './components/page/post-page/post-page.component';
import {PostCardComponent} from './components/post-card/post-card.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {EditPostPageComponent} from './components/page/edit-post-page/edit-post-page.component';
import {AlertComponent} from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatePageComponent,
    PostPageComponent,
    PostCardComponent,
    MainLayoutComponent,
    EditPostPageComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
