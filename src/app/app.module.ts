import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AccountOptionsFormComponent} from './components/account-options-form/account-options-form.component';


const appRoutes: Routes = [
  { path: '**', component: AccountOptionsFormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AccountOptionsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
