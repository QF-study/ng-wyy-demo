import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolveService } from './home-resolve.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data:{ title: '发现'}, resolve: { homeDatas: HomeResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolveService]
})
export class HomeRoutingModule { }
