import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  @Input() pageTitle: string;

  constructor() { }

  ngOnInit() {
  }
}
