import { Component, OnInit } from '@angular/core';
import { AuthService } from '@swp/auth/services/auth.service';

@Component({
  selector: 'swp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
