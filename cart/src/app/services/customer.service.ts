import { Injectable, OnInit } from "@angular/core";
import { Customer } from "../model/customer.model";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class CustomerService implements OnInit{
    public customers:Customer[];
    public cust: Observable<Customer[]>;
    constructor(private http:HttpClient){
        this.customers = new Array<Customer>();
        this.cust = new Observable<Customer[]>();
    }
    ngOnInit(): void {
        
    }

    getAllCustomers(){       
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE2NjI0MDM3MjMsImV4cCI6MTY2MzAwODUyMywiaWF0IjoxNjYyNDAzNzIzfQ.UUMmiLdGWwkwEOMm8JYNVDZFVWysDtwpScV4J_hq8kw'
          })
        };


        //return this.http.get<Customer[]>('https://questapi.yellow-chips.com/customers/1',httpOptions);
    
        return this.http.get<Customer[]>('https://questapi.yellow-chips.com/customers/1',httpOptions);

        //this.http.get<Customer[]>('https://questapi.yellow-chips.com/customers/1',httpOptions)
        //.subscribe(data=> { 
        //console.log(data);  this.customers = data as Customer[];console.log(this.customers);  }  );
        //console.log(this.customers);

        //this.http.get<Customer[]>('https://questapi.yellow-chips.com/customers/1',httpOptions)
        //.subscribe((data: Customer[]) => this.customers = data as Customer[] );
        //console.log(this.customers);
        //return this.customers;
        //console.log(this.customers);
        //console.log(this.cust[0]);

       //return this.customers;
        //req.subscribe(data=> {console.log(data); this.cust=data;console.log(this.cust)});
    }

}