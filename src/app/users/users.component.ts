import { Component, OnInit } from '@angular/core';
import { User } from "./users.class";
import { UsersService } from "./users.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: []
})

export class UsersComponent implements OnInit {

	nameModel : String;
	ageModel : String;
	detailsModel : String;
	users : User[];
	totalUsers : number;

  	constructor(private usersService : UsersService,
  					private router : Router) { 
  		this.nameModel = '';
  		this.ageModel = '';
  		this.detailsModel = '';

  		this.users = usersService.getUsers();
  		this.totalUsers = this.users.length;
  	}

  	ngOnInit() {
  	}

  	createUser() {

  		this.totalUsers += 1;

  		let newUser : User = {
  			id : this.getId(),
  			name : this.nameModel,
  			age : this.ageModel,
  			details : this.detailsModel
  		};

  		this.users.push(newUser);

  		this.nameModel = this.ageModel = '';
  	}

  	details( id ) {
  		this.router.navigate(['/details', id]);
  	}

  	getId() {
  		return this.totalUsers;
  	}

}
