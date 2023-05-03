import { Injectable } from '@angular/core'
import { GoogleAuthProvider } from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly fireAuth: AngularFireAuth) {}

	signInWithGoogle() {
		return this.fireAuth
			.signInWithPopup(new GoogleAuthProvider())
			.then((data) => {
				console.log(data)
			})
			.catch((err) => console.log(err))
	}
}
