import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})  //Attribute
export class CategoriesService {    //referans tipin en temel sınıfı object
  controllerUrl = `${environment.apiUrl}/categories`;
  // private httpClient:HttpClient    //constructor içinde vermek daha kısa
  // getCategoriesResponse:Object={}

    constructor(private httpClient:HttpClient) {
    // this.httpClient = httpClient;
   }

   //generic <> class oluşturulurken burdaki tip kullanılır.
   //jenerikle beraber classlara ve motedlora üzerinde çalışılacak bir tip geçebiliriz.
  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.controllerUrl)  //Get Http isteğini hazırlar
    // .subscribe((response:Object)=>{        //comment olmadan önce return etmiyorduk
    //   this.getCategoriesResponse=response;
    //  console.log(response);    //subscribe metodu ise isteği gönderir ve ilgili cevabı alır.
    //Get http://localhost:3000/categories
    };

    add(category:Category):Observable<Category>{
      return this.httpClient.post<Category>(this.controllerUrl,category)
    }

    // update(category:Category):Observable<Category>{
    //   return this.httpClient.put<Category>(this.controllerUrl,category)
    // }

    update(category: Category): Observable<Category> {
      return this.httpClient.put<Category>(
        `${this.controllerUrl}/${category.id}`,
        category
      );
    }
    
    delete(id:number):Observable<void>{
      return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`)
    }
  }

