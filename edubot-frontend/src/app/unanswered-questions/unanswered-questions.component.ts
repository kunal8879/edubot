import { Component, OnInit, ViewChild } from '@angular/core';
import { UnansweredQuestion } from '../models/unanswered_question';
import { UnansweredQuestionService } from './unanswered-question.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unanswered-questions',
  templateUrl: './unanswered-questions.component.html',
  styleUrls: ['./unanswered-questions.component.css']
})
export class UnansweredQuestionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Index', 'Questions', 'Time'];
  dataSource: MatTableDataSource<UnansweredQuestion>;
  isLoaded: boolean = false;

  constructor(private unansweredQuestion: UnansweredQuestionService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.getAllUnansweredQuestions();
    this.isLoaded = false;
  }

  getAllUnansweredQuestions() {
    this.unansweredQuestion.getUnansweredQuestion().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}