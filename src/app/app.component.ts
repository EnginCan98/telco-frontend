import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h3>asdf</h3>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telco-frontend';

  sumOfNumbers(a:number,b:number):number{
    let result = a + b;
    //console.log(result);
    return result
    // return a+b;
  }

  btnClick(){
    alert('Butona tıklandı')
  }
}


