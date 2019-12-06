import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { ShowPizzaComponent } from './show-pizza/show-pizza.component';
import { environment } from 'src/environments/environment';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    AddPizzaComponent,
    ShowPizzaComponent,
    SignUpComponent,
    EditPizzaComponent,
    ErrorComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
