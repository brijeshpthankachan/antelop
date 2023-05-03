import { Injectable } from '@angular/core'
import { GoogleAuthProvider } from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly fireAuth: AngularFireAuth) {}

	async signInWithGoogle() {
		const data = await this.fireAuth.signInWithPopup(new GoogleAuthProvider())
		localStorage.setItem('currentUser', JSON.stringify(data))
	}
}
