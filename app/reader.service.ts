import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

Injectable()
export class ReaderService {
	private baseUrl: string = 'http://swapi.co/api';
    constructor(private http : Http){ }

	getReaders(): string[] {return ['R1', 'R2', 'R3', 'R4', 'R5'] }
}

