import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import {Login} from './modules/authentication/login';
import {Register} from './modules/authentication/register';
import {PageNotFoundComponent} from './modules/notfound/notfound';
import { FormsModule }   from '@angular/forms';
import {News} from './modules/news/news';
import {NewsDetail} from './modules/news/newsDetail';
import {AddNews} from './modules/news/addNews';
import {Info} from './modules/info/info';
import {Events} from './modules/events/events';
import {Home} from './modules/home/home';
import {DataService} from './modules/reusables/data.service';

const routers:Routes = [
  { path: 'login', component: Login },
  { path: 'register',      component: Register },
  {path:'news',component:News,
    children:[
      { path:"addNews",component:AddNews},
      { path:":id",component:NewsDetail},
      
    ]
  },
  {path:'info',component:Info},
  {path:'events',component:Events},
  {path:'home',component:Home},
  { path: '**', component: PageNotFoundComponent }
  
  
]
@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(routers)],
  declarations: [ AppComponent,Login,Register,PageNotFoundComponent,Events,News,Info,Home,AddNews,NewsDetail],
  providers:[DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
