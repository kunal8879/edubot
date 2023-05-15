import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnansweredQuestionService {
  
  apiUrl = 'http://127.0.0.1:8000/unanswered_questions'

  constructor(private http: HttpClient) { }

  getUnansweredQuestion(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

}
