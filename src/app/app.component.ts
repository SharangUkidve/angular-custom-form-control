import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  choices = ['Exercise 🏋️‍♀️', 'Extra Fries 🍟'];
  selectedChoice: string;
  choicesDisabled = false;

  companies = ['Google', 'Apple', 'Samsung', 'OnePlus'];
  selectedCompany = 'Samsung';
  companiesDisabled = false;
  multiCompanies = false;

  fruits = ['Banana', 'Apple', 'Mango', 'Tomato', 'Kiwi'];
  selectedFruit = new FormControl('Banana', Validators.required);
  multiFruits = false;

  saiyans = ['Kakarot', 'Vegeta', 'Nappa', 'Raditz', 'Broly'];
  selectedSaiyan = new FormControl('Kakarot', Validators.required);

  // anime = [
  //   {}
  // ]

  logger(...args) {
    console.log(args);
  }
}
