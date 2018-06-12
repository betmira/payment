import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchComponent, DropdownComponent, ResetButtonComponent, SearchButtonComponent],
  providers: [],
  exports: [SearchComponent, DropdownComponent, ResetButtonComponent, SearchButtonComponent]
})
export class SharedModule { }
