import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Rice',
      'Rice Recipe',
      'https://media.istockphoto.com/photos/cooked-white-rice-picture-id1304761421?k=20&m=1304761421&s=612x612&w=0&h=jvxUOrpVaACiGHpPkb1h_iry_5bS58zAh3g_z_JtMAQ='
    ),
    new Recipe(
      'Gravy',
      'Gravy Recipe',
      'https://cdn.pixabay.com/photo/2020/09/19/13/16/meal-5584434_960_720.jpg'
    ),
    new Recipe(
      'Chicken',
      'Chicken Recipe',
      'https://media.istockphoto.com/photos/chicken-lollipop-on-a-white-platter-garnished-with-scallion-picture-id1269099250?s=170x170'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
