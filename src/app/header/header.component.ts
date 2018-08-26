import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../Auth/authorService';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  OnSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor(private authService: AuthorService) {

  }

  ngOnInit() {
  }
  onLogout() {

    this.authService.logout();
  }
}
