import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  donhangs: any;
  user: any=localStorage.getItem('user')
  carts: any=[];
  totalquanlity: number=this.product.getcarttotalquanlity();
  totalprice: number=this.product.getcarttotalprice();
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.carts=this.product.GetCarts();
  }
  subtotal(cart: any){
    return cart.quantity*cart.price;
  }
  adddonhang(username:string, userstatus: string){
    
    this.donhangs = {
      'username': username,
      'OrderStatus': userstatus,
   
    };
    this.product.payment(this.donhangs as any).subscribe(donhang=>{
      this.donhangs=donhang
    });
    console.log(this.donhangs);
    this.router.navigateByUrl("/cart");
  }

}
