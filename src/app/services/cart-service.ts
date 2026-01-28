import { Injectable } from '@angular/core';
import { TrainingModel } from '../models/training-model.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addTraining(training:TrainingModel){}
}
