import { Component } from '@angular/core';
import { ReaderService } from './reader.service';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';



@Component({
	selector:'readers',
	template: `<p> Component works ! </p>`
})

@Injectable()
export class ReaderComponent{
	public title : string = "The list of courses";
	readers = [];
	constructor(private http:Http) { }

	 getFoods() {
        return this.http.get('https://projects.propublica.org/nonprofits/api/v1/search.json?order=revenue&page=0&sort_order=desc').map((res:Response) => res.json());
        
    }

}