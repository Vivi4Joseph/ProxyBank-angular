import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  @Input()
  accountDetails = new Account();


  constructor(
      public service: AccountService,
      public router: Router
  ) {
      
  }

  ngOnInit(): void {

  }
  
  gotoList() {
    this.router.navigate(['/clients-list']);
    return false;
}

}
