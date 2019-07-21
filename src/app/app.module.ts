import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UserService, BooleanPipe } from './user.service';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { SortableDirective } from './sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    UserDetailComponent,
    BooleanPipe,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false }),
    NgbModule
  ],
  providers: [
    UserService,
    { provide : NgbDateAdapter, useClass: NgbDateNativeAdapter },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
