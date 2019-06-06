import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import {  ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  user: any;
  allUsers: any = [];
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private location: Location,
    private service: UserService
  ) {}

  ngOnInit() {
    this.service.getUser().subscribe(data => {
      this.allUsers = data;
     // console.log(this.allUsers, "all users");
         this.route.paramMap.subscribe(params => {
          console.log(params.get("id"), "xxxxxxx");
          this.getUserById(params.get("id"));
        });
      
    });
  }

  getUserById(id) {
    for (let i in this.allUsers) {
      if (this.allUsers[i].id == id) {
        this.user = this.allUsers[i];
       // console.log(this.user, "from id");
      }
    }
  }

  goBack() {
    //this.location.back();
    this.router.navigate(['/user'])

  }
}
