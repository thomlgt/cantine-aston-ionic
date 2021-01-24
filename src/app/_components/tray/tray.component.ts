import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss'],
})
export class TrayComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modal.dismiss();
  }
}
