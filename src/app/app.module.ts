import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nar-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponente } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponente
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
