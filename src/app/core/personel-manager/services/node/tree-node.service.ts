import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeNodeData } from '../../../../mock-data/tree-node-data';

@Injectable({
  providedIn: 'root'
})
export class TreeNodeService {

  constructor() { }

  getTreeNodeData(): TreeNode[] {
    return JSON.parse(TreeNodeData).data;
  }
}
