import {Component} from 'angular2/core'
import {ReaderService} from './course.service'

@Component({
	selector:'readers',
	template:`<h2>Reader</h2>
		{{title}}
		<ul>
			<li *ngFor="#reader of readers">
				{{reader}}
			</li>
		</ul>
		`,
	providers : [ReaderService]
})


export class ReaderComponent{
	title = "The list of courses";
	courses;
	constructor(readerService : ReaderService) {
		this.courses = readerService.getReaders();

	}

}