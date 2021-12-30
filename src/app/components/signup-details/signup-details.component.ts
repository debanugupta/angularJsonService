import { error } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/signup.service';

import { SignupData } from '../../models/signup-data.model';

@Component({
    selector: 'signup-details',
    templateUrl: './signup-details.component.html'
})
export class SignupDetailsComponent implements OnInit, OnDestroy {
    signupData: SignupData;
    private activatedSub: Subscription;

    constructor(private signupService: SignupService, private router: Router,) {

    }

    ngOnInit() {
        this.fillDetail();
    }

    fillDetail(){
        // this.signupService.getData().subscribe(data => {
        //     this.signupData = data;
        //     console.log(this.signupData);
        //   });




        // New Code
        this.activatedSub = this.signupService.activatedEmitter.subscribe(data => {
            this.signupData = data;
            console.log(data);
          }),
          err => console.log('HTTP Error', err);
    }

    

    ngOnDestroy(): void {
        this.activatedSub.unsubscribe();
      }
}
