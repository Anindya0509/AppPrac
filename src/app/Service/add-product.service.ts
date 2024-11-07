import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }

  addProductComponentOpen = new BehaviorSubject<boolean>(false);

  setCompOpen(value:boolean){
    this.addProductComponentOpen.next(value);
  }

  getCompOpen(): boolean{
    return this.addProductComponentOpen.value;
  }
}
