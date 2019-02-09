import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreePanelComponent } from './tree-panel/tree-panel.component';
import { ToolbarComponent } from './tree-panel/toolbar/toolbar.component';
import { TreeViewComponent } from './tree-panel/tree-view/tree-view.component';
import { TreeNodeDetailComponent } from './tree-panel/tree-node-detail/tree-node-detail.component';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { TreeModule } from 'primeng/tree';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TreePanelComponent, ToolbarComponent, TreeViewComponent, TreeNodeDetailComponent],
  imports: [
    CommonModule,
    PanelModule,
    MenubarModule,
    TreeModule,
    ScrollPanelModule,
    ButtonModule
  ],
  exports: [
    TreePanelComponent
  ]
})
export class PersonelManagerModule { }
