import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../model/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.css']
})
export class AccountShowComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  accountDetails: any = {};

  constructor(private service: AccountService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
      this.service.getAccount(this.id).subscribe((data: Account[]) => {
        if (data.length > 0) {
          this.accountDetails = data.at(0);
        }
      })
  }

  gotoList() {
      this.router.navigate(['/clients-list']);
      return false;
  }
}
