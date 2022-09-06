export class Customer {
    id: number = 0;
    addressLine1: string = '';
billing: string = '';
city: string = '';
collectFreight: string = '';
comments: string = '';
companyId: string = '';
contactPersonName: string = '';
displayLineNo: boolean=false;
emailAddress: string = '';
endCustomerName: string = '';
faxNumber:string = '';
fob: string = '';

invoicingtypeid: number =0;
name: string = '';
packingSlipId: number =0;
rePackingCharge:number =0;
rePackingPoNo: string = '';
shipVia: string = '';

state: string = '';
surcharge: number =0;
telephoneNumber: string = '';
terms: string = '';
truckType: string = '';
zipCode: string = '';

    constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }
}