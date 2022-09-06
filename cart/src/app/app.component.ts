import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer.model';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cart';
  public cust: Observable<Customer[]>;
  public customers: Customer[];
  public customer:Customer;
  constructor(private http:HttpClient,private customerService:CustomerService)
  {
    this.cust = new Observable<Customer[]>();
    this.customers = new Array<Customer>();
    this.customer = new Customer();
  }
  ngOnInit()
  {
   
    //this.cust = this.customerService.getAllCustomers();
    //console.log(this.cust);
    
    //this.customerService.getAllCustomers().subscribe(data=>{console.log(data); this.customers=data as Customer[]; console.log(this.customers); this.title=this.customers[0].name});

    //this.customerService.getAllCustomers()
    //.subscribe(countries => {
    //  this.customers = countries;
    //})
     
    //console.log('printging customers data'); 
    //console.log(this.customers); 

    //this.customer = this.cust as Customer[];

    //console.log(this.customers); 
  }
}
