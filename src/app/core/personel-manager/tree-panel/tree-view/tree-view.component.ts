import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { TreeNodeService } from '../../services/node/tree-node.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  nodes: TreeNode[];
  selectedNode: TreeNode;

  constructor(private treeNodeService: TreeNodeService) { }

  ngOnInit() {
    this.nodes = this.treeNodeService.getTreeNodeData();
  }

}
