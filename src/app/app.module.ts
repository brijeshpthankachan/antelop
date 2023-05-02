import { NgModule } from '@angular/core'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { HomeComponent } from '@app/home/home.component'
import { LoginComponent } from '@app/login/login.component'
import { ReactiveComponent } from '@app/reactive/reactive.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { environment } from '../environments/environment'
import { RegisterComponent } from './register/register.component'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ReactiveComponent,
		LoginComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NgbModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
