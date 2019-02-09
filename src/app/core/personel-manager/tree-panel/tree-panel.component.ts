import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-panel',
  templateUrl: './tree-panel.component.html',
  styleUrls: ['./tree-panel.component.scss']
})
export class TreePanelComponent implements OnInit {
  isFullscreen: boolean;

  constructor() { }

  ngOnInit() {
    this.isFullscreen = false;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

}
