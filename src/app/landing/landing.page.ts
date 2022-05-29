import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private control: ControllerService,
  ) { }

  ngOnInit() {
    this.control.menu.swipeGesture(false);
  }

}
