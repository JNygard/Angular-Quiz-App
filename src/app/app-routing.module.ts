import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent }  from './components/quiz/quiz.component';
import { CategoryComponent }  from './components/category/category.component';


const routes: Routes = [
  { path: '', redirectTo: '/category/1', pathMatch: 'full' },

  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:id', component: QuizComponent },

  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }