import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatbotServiceService, Message } from './chatbot-service.service';
import { MessageModel } from '../models/chatbot_response';
import { FormControl } from '@angular/forms';
import { NewUser } from '../models/new_user';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  // @ViewChild('chat-box') chatBox: any;

  messages: MessageModel[] = [];
  value: string = '';
  isLoading: boolean = true;
  showDelay = new FormControl(700);
  chatBox: any = document.getElementsByClassName('messages');
  questionNotAnswered: string = '';

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    this.messages.push(new MessageModel('bot', 'Hello, I am your personal assistant. How can I help you?', new Date().toString().split(' ')[4]));
    this.isLoading = false;
  }

  sendMessage() {
    if (this.value.trim() != '') {
      this.isLoading = true;
      let currentTime: string = new Date().toString().split(' ')[4];
      let messageModel = new MessageModel('user', this.value, currentTime);

      if(messageModel.chat.includes('@gmail.com' || '@yahoo.com' || '@outlook.com' || '@hotmail.com')) {
        this.messages.push(messageModel);
        let user = new NewUser();
        user.email = messageModel.chat;
        user.new_question = this.questionNotAnswered;
        user.time = currentTime;
        this.value = '';
        console.log(user);

        this.chatbotServiceService.saveNewUser(user).subscribe((val) => {
          console.log(val);
          this.messages.push(val);
          this.isLoading = false;
        });
        return;
      }

      this.messages.push(messageModel);
      this.value = '';
      console.log(messageModel);
      this.chatbotServiceService.getBotMessage(messageModel).subscribe((val) => {
        console.log(val);
        if (val.chat == "Sorry I have no answer for that question right now. Please share you mail id for further assistance.") {
          this.questionNotAnswered = messageModel.chat;
        }
        this.messages.push(val);
        this.isLoading = false;
        
      });
    }
  }
}