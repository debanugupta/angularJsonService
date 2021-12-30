import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup-data.model';
import { Country } from 'src/app/models/country.model';
import { Observable } from 'rxjs';
import  countryData from 'src/assets/data.json';  
import { HttpClient } from '@angular/common/http';
import { State } from 'src/app/models/state.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output()
  save = new EventEmitter<SignupData>();
  httpClient: any;
  products: any;
  // @ViewChild('editForm', {static: true}) editForm: NgForm;
  

  constructor(private countriesService: CountriesService, private signupService: SignupService, private router: Router, private http: HttpClient) {
  }

  private _jsonURL = 'assets/data.json';

  countries:Country[];
  states: State[];
  signupData: SignupData;
  password1: string ='';
  password2: string ='';
  // submit(form: NgForm) {

  // }

  submit(form: NgForm) {
    console.log(this.signupData);
    // this.signupService.saveData(this.signupData);
    
    
    //new code
    this.signupService.activatedEmitter.next(this.signupData);
    this.router.navigate(['/signupDetail']);
  }

  ngOnInit() {
    this.resetSignupData();
    this.fillCountries();
  }

  fillCountries(): void{
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data.countries;
      console.log(this.countries);
    });

  }

  fillStates(countryId): void{
    this.countriesService.getStates().subscribe(data => {
      this.states = data.states.filter(s => s.countryId === countryId);
      console.log(this.states);
    });
  }

  resetSignupData(){
    this.signupData = {
      username: '',
      phoneNumber: '',
      email: '',
      country: '',
      state: null
    };
  }

  onOptionsSelected(event){
    const selectCountry = event.target.value;
    console.log(selectCountry);
    this.fillStates(Number(selectCountry));
}
  
}
