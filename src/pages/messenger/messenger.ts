import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Message } from '../../models/Message';
import { ChatHistory } from '../../mocks/providers/chatHistory';
/**
 * Generated class for the MessengerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-messenger',
  templateUrl: 'messenger.html',
})
export class MessengerPage {

  currentMessageList:Message[];

  constructor(public navCtrl: NavController,public chatHistory: ChatHistory, public navParams: NavParams) {
    //this.currentMessageList = chatHistory.defaultMessage;
    this.currentMessageList = chatHistory.query()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessengerPage');
  }


  sendRequest(){
    alert("sending request to IFB BOT...");
  }
}
