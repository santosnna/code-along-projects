import { Component } from '@angular/core';
import { MessagesComponent } from './messages.components';
import { NewMessageComponent } from './new-message.components';
@Component({
  selector: 'home',
  template: ` <new-message></new-message>
    <messages></messages>`,
})
export class HomeComponent {}
