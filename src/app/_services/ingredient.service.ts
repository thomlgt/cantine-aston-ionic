import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ingredient } from '../_models/ingredient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends ResourceService<number, Ingredient> {

  constructor(private http : HttpClient) {
    super(http, 'ingredient')
  }

}
