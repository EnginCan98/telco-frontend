import { Component, OnInit } from '@angular/core';

import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h3>asdf</h3>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'telco-frontend12';
  isLoading: boolean = false;
  today: Date = new Date();

  constructor(private loadingService:LoadingService){}

  ngOnInit(): void {
    this.subscribeToLoading();
  }



  sumOfNumbers(a:number,b:number):number{
    let result = a + b;
    //console.log(result);
    return result
    // return a+b;
  }

  btnClick(){
    alert('Butona tıklandı')
  }

  subscribeToLoading(){
    this.loadingService.isLoadingSubject.subscribe((isLoading)=>{
      this.isLoading=isLoading;
      console.log(`Is Loading değeri: ${isLoading}`);
    });
  }
  startLoading(){
    this.loadingService.startLoading();
  }
  stopLoading(){
    this.loadingService.stopLoading();
  }
}


