import { Component, OnInit } from '@angular/core'
import { currentUser } from '@app/model/model'
import { AuthService } from '@app/services/auth.service'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	currentUser: currentUser = {
		photoURL: '',
		displayName: 'default-user',
	}

	constructor(private readonly authService: AuthService) {}
	ngOnInit(): void {
		const currentUser = localStorage.getItem('currentUser')
		if (currentUser) {
			this.currentUser = JSON.parse(currentUser).user
		}
	}

	logout() {
		this.authService.signOut()
	}
}
