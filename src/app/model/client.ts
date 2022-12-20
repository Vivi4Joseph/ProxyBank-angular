import { Adresse } from './adresse';
export class Client {
  id: number=0;
  lastName: string='';
  firstName: string='';
  login: string='';
  motDePasse: string='';
  adresse: Adresse={numero:'', rue:'', ville:''};


}
