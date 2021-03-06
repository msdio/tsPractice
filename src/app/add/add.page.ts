import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  title='' //제목
  content='' //내용

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onClickedCloseButton() {
    this.modalController.dismiss();
  }

  onClickAddButton() {
    this.modalController.dismiss({
      title: this.title,
      content: this.content
    });

  }

}
