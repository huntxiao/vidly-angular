import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";
interface Product {
  name: String;
  price: Number;
  description: String;
}
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    console.log("this.route.paramMap", this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      console.log(params.get("productId"));
      this.product = products[+params.get("productId")];
    });
  }
}
