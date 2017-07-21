import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Message } from '../../models/Message';


@Injectable()
export class ChatHistory {
  messages: Message[] = [];

  defaultMessage: any = [{
    "personName": "Agent",
    "message": "Hello, Tom!, How may I assist you today?",
    "options": [{"name":"Buy Auto"},
              {"URI":"http://oms.infarmbureau.com"}]
  }];

  constructor (public http: Http){
    let messages = [
        {
          "personName": "Tom",
          "message": "I would like to get a quote for auto"
        },
        {
          "personName": "Agent",
          "message": "Glad I would help you with best quote for auto"
        },
        {
          "personName": "Agent",
          "message": "Please enter your date of birth or send me your driver license snapshot"
        }
    ];

    for(let message of messages){
      this.messages.push(new Message(message))
    }
  }

  query(params?: any) {
    if (!params) {
      return this.messages;
    }

    return this.messages.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(message: Message) {
    this.messages.push(message);
  }


}
