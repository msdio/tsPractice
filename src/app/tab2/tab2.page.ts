import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddPage } from '../add/add.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //메모 목록 데이터 배열
  memoData = [];

  constructor(private modalController: ModalController) {}

  async onClickedAddButton() {

    const modal = await this.modalController.create({
      component: AddPage
    });

    //메모 작성화면에서 작성된 데이터 받기 (received)
    modal.onDidDismiss().then(received => {

      if(received.data.title) {
        this.memoData.push({
          title: received.data.title,
          content: received.data.content
        });
      }

    });

    return await modal.present();
  }

}
