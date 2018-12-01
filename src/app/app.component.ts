import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();

  posts = [
  	{
  		title: 'Mon premier post',
  		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat justo felis, fermentum elementum magna rutrum at. Mauris luctus blandit consectetur. Etiam consequat ac justo eu pulvinar. Duis facilisis feugiat nulla, vitae venenatis elit feugiat sed.',
  		loveIts: 0,
      created_at: new Date()
  	},
  	{
  		title: 'Mon deuxième post',
  		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat justo felis, fermentum elementum magna rutrum at. Mauris luctus blandit consectetur. Etiam consequat ac justo.',
  		loveIts: 0,
      created_at: new Date()
  	},
  	{
  		title: 'Mon troisième post',
  		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat justo felis, fermentum elementum magna rutrum at. Mauris luctus blandit consectetur.',
  		loveIts: 0,
      created_at: new Date()
  	}
  ];

  constructor();	

}

