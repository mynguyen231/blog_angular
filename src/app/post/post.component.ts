import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	
	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  increaseLove() {
  	// increase loveIts number by one
  	this.loveIts += 1;
  }

  decreaseLove() {
  	// decrease loveIts number by one
  	this.loveIts -= 1;
  }

}
