import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { PersonelManagerModule } from './personel-manager/personel-manager.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    PersonelManagerModule
  ],
  exports: [
    NavigationModule,
    PersonelManagerModule
  ]
})
export class CoreModule { }
