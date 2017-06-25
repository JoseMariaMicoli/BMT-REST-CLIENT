import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskDataService } from './task-data.service';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
