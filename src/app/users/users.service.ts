import { Injectable } from '@angular/core';

import { User } from './users.class'

@Injectable()
export class UsersService {

	rawUsers : User[] = [
		{ 
			id: 1,
			name : 'Pedro',
			age : '28',
			details : 'Pedro es muy bueno jugando al Fifa'
		},
		{
			id : 2,
			name : 'Maria',
			age: '31',
			details : 'A maria le gusta mucho jugar al Padel'
		}
	]

  	constructor() { }

  	getUsers() : User[] {
  		return this.rawUsers;
  	}

  	userDetails( id ) : User {
  		for (var i = 0; i < this.rawUsers.length ; i++) {
  			if (this.rawUsers[i].id == id) {
  				return this.rawUsers[i];
  			}
  		}
  		return null;
  	}

}
