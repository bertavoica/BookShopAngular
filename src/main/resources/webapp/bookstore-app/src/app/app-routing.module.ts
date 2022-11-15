import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddBookComponent} from "./book/add-book/add-book.component";
import {UpdateBookComponent} from "./book/update-book/update-book.component";

const routes: Routes = [
  {path: 'list-books', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-book', component: AddBookComponent},
  {path: 'update-book', component: UpdateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
