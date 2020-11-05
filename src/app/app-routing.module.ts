import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {HomePageComponent} from './components/page/home-page/home-page.component';
import {PostPageComponent} from './components/page/post-page/post-page.component';
import {CreatePageComponent} from './components/page/create-page/create-page.component';
import {EditPostPageComponent} from './components/page/edit-post-page/edit-post-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'post', component: PostPageComponent},
      {path: 'create/post', component: CreatePageComponent},
      {path: 'post/edit', component: EditPostPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
