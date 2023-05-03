import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	currentUser: any

	ngOnInit(): void {
		const currentUser = localStorage.getItem('currentUser') || ''
		this.currentUser = JSON.parse(currentUser).user
		console.log(this.currentUser)
	}
}
