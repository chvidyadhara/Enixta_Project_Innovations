import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesSearchComponent } from './profiles-search/profiles-search.component';
import { UserProfileSerService } from './user-profile-ser.service';
import { SearchpipePipe } from './searchpipe.pipe';
import {   HttpClientModule} from '@angular/common/http';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [
    AppComponent,
    ProfilesSearchComponent,
    SearchpipePipe,
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule ,
    PaginationModule.forRoot()
  ],
  providers: [UserProfileSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
