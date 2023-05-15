import { Component, OnInit } from '@angular/core';
import { Subscription, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-moodle',
  templateUrl: './moodle.component.html',
  styleUrls: ['./moodle.component.css']
})
export class MoodleComponent implements OnInit{
  MoodleSubcription : Subscription;
  isShow : boolean = true;
  hideComponent() {
    this.isShow = false;
  }
  working: boolean;

  ngOnInit() {
    
  }

}
