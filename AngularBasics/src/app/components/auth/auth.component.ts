import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLogginMode: boolean = true
  ngOnInit(): void {
    //
  }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode
  }
}
