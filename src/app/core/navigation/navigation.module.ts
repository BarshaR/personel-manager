import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    SideNavigationComponent,
    TopNavigationComponent
  ]
})
export class NavigationModule { }
