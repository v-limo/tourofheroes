import { Injectable } from '@angular/core';

import { Message } from '../message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  messages: Message[] = [];

  add(message: string): void {
    const id = new Date().getTime() + Math.random();
    const messageObj: Message = {
      content: message,
      id,
    };
    this.messages.push(messageObj);
  }

  remove(id: number): void {
    this.messages = this.messages.filter((m) => m.id !== id);
  }

  clear(): void {
    this.messages = [];
  }
}
