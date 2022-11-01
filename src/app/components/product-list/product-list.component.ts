import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  product: string[] = [];
  name: string = '';

  
  productForm = new FormGroup({
    name : new FormControl('')
  })

  constructor() {}

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.name = this.productForm.value.name? this.productForm.value.name : " ";
    this.add(this.name);
  }

  getAll() {
    this.product=['Ayakkabı', 'Parfüm', 'Yiyecek', 'İçecek'];
  }
  
  add(name:string) {
		this.product.push(name);
	}

  delete(name:string) :string[]{
    this.product= this.product.filter(a=> {
        return a !== name;
    })
    return this.product;
}


}
