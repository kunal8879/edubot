import { Injectable, Type } from '@angular/core';
import { Observable, Subject, timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../models/chatbot_response';
import { NewUser } from '../models/new_user';

export class Message {
  constructor(public author: string, public content: string, public time: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotServiceService {

  apiUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getBotMessage(model: MessageModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/edubot`, model);
  }

  saveNewUser(user: NewUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/newUser`, user);
  }
}
