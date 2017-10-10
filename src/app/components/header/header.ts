import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent {
  public get isBackChevronVisible(): boolean {
    return this._location.path() !== '/home';
  }

  constructor(private _location: Location) {
  }

  public goBack() {
    this._location.back();
  }
}
