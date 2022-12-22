import { Client } from "./client"

export class Account {
  id: number=0;
  amount: string='';
  date: Date= new Date();
  client: Client= {id: 0 ,lastName:'', firstName:'',login:'',motDePasse: '' };
  overdraft: string='';
}
