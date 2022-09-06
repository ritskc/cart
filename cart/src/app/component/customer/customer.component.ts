import { Component, Injectable, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers: Customer[];
  public customers$ : Observable<Customer[]>;
  constructor(private customerService:CustomerService) { 
    this.customers = new Array<Customer>();
    this.customers$ =  new Observable<Customer[]>();
  }

  ngOnInit(): void {
    //this.customerService.getAllCustomers().subscribe(data=>{console.log(data); this.customers=data as Customer[];});

    this.customers$ = this.customerService.getAllCustomers();
  }

}
