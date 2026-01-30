import { Injectable, inject } from '@angular/core';
import { TrainingModel } from '../models/training-model.model';
import { CartComponent } from '../components/cart/cart-component/cart-component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart : TrainingModel[] = [];

  constructor(){
  }
  addTraining(training:TrainingModel){
    this.cart.push(training);
  }
  getTraining(){
    return this.cart;
  }
}
