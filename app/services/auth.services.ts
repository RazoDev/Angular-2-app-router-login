import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService{
    isLoggedIn: boolean = false;
    isAdmin: boolean = false;

    login(username:string){
        return Observable.of(true).delay(2500).do(val => {
            this.isLoggedIn = true;
            if (username=="admin" )
            {
                this.isAdmin = true;
            }
        });
    }

    logout(){
        this.isLoggedIn = false;
    }
}