import { Injectable } from '@angular/core'
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signOut,
} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly fireAuth: AngularFireAuth) {}

	async signInWithGoogle() {
		const data = await this.fireAuth.signInWithRedirect(
			new GoogleAuthProvider()
		)
		localStorage.setItem('currentUser', JSON.stringify(data))
	}

	async signInWithPassword(email: string, password: string) {
		const auth = getAuth()
		const data = await createUserWithEmailAndPassword(auth, email, password)
		console.log(data)
	}

	signOut() {
		const auth = getAuth()
		signOut(auth).then(() => console.log('logged out successfully'))
	}
}
