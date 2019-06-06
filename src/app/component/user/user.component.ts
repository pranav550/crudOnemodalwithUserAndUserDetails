import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  Users: any;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this.userservice.getUser().subscribe(data => {
      this.Users = data;
    });
  }
}
