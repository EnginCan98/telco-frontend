import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ListviewComponent } from './components/listview/listview.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListviewComponent,
    ProductListComponent,
    CreateFakeArrayPipe,
    SplitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  exports:[],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
