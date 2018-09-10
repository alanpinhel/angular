import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from './../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from './../../shared/directives/dark-on-hover/dark-on-hover.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescription,
    PhotoListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule,
    RouterModule
  ]
})
export class PhotoListModule {}
