import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service'; 
import { User } from '../users/users.class';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	id : String;
	user : User;

  	constructor(private route : ActivatedRoute,
  					private router : Router,
  					private usersService : UsersService ) {

  	}

  	ngOnInit() {
  		this.id = this.route.snapshot.paramMap.get('id');
  		this.user = this.usersService.userDetails(this.id);  		
  	}

}
