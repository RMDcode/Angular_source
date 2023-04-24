import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

const routes: Routes = [

  {path:'technology',component:TechnologyComponent},
  {path:'books',component:BooksComponent},
  {path:'',component:AppComponent},
  {path:'**',component:WrongchoiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
