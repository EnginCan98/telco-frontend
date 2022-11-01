import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  //component içerisinde yer alan properties için state olur.
  //?null olabilir
  //!:null olmayacak bu property'i kullanadan önce işlemi gerçekleştireceğimizi belirtiyoruz.
  categories!: Category[];   //eşittir diye boş array vermek initializer.! demek property kullanılmadan önce atanacak demek.?null veya undefied olabilir demek.
  language: string = 'en';

  categoryAddForm!: FormGroup;

  categoryIdToDelete : number=0;  //state

  categoryToUpdate ?: Category[];

  error: string = '';

  changeButton=false;

  title = "";

  button="";


  //IoC(Inversion of Control) Container kullanılır.
  //Dependancy Injection
  constructor(private categoriesService:CategoriesService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getCategories();
    this.createCategoryAddForm();
    // this.categoriesService.delete(9).subscribe();
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',[Validators.required,Validators.minLength(10)]],
    });
  }

  getCategories() {
    //Object tipi henüz belli olmayan tip diyebiliriz.Referans tiplerin en temel sınıfı diyebiliriz.
    this.categoriesService.getCategories().subscribe((response)=>{
      //Observable Design Pattern
      this.categories = response;
    });
    
    //GET http://localhost:3000/categories
    // this.categories = ['Gi', 'Ayakkabı', 'Parfüm', 'Yiyecek', 'İçecek'];
  }

  changeCategoryIdToDelete(event:any){
    this.categoryIdToDelete = event.target.value;
  }

  add(): void {
    this.changeButton=false;
    if (this.categoryAddForm.invalid) {
      this.error = 'Form is invalid';
      return;
    }
    if (this.error) this.error = '';

  //   // const {name, description} = this.categoryAddForm.value;
  //   // // this.categoryAddForm.value
  //   // const category: Category = {
  //   //   id: 0,
  //   //   // name: name,
  //   //   name,
  //   //   description,
  //   // };

  //   // spread operator ... (ES6)
    const category: Category = {
      ...this.categoryAddForm.value,
    };
    this.categoriesService.add(category).subscribe({
      next: (response) => {
        console.info(`Category(${response.id}) has added.`);
      },
      error: (err) => {
        console.log(err);

        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        this.categoryAddForm.reset();
        this.getCategories();
      },
    });
  }

  update(){
    this.changeButton=true;
    this.categoryToUpdate=this.categories.filter(
      (category: Category) => category.id
    );
  
    const category: Category = {
      ...this.categoryAddForm.value,
    };
    this.categoriesService.update(category).subscribe({
      next: (response) => {
        console.info(`Category(${response.id,response.name,response.description}) has updated.`);
      },
      error: (err) => {
        console.log(err);

        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        this.categoryAddForm.reset();
        this.getCategories();
      },
    });
  }

  
  delete() {
    this.categoriesService.delete(this.categoryIdToDelete).subscribe(() => {
      this.categoryIdToDelete = 0;
      this.getCategories();
    });
  }
  // delete(){
  //   this.categoriesService.delete(this.categoryIdToDelete).subscribe();
  // }

}