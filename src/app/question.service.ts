import { Injectable } from '@angular/core';
import { QuestionDto } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: QuestionDto[] = [];

  constructor() { }

  addQuestion(newQuestion: QuestionDto) {
    this.removeRepeatedQuestion(newQuestion);
    this.questions.push(newQuestion);
  }

  getQuestions() {
    return this.questions;
  }

  private removeRepeatedQuestion(newQuestion: QuestionDto) {
    const idAlreadyExists = this.questions.findIndex((q) => q.id == newQuestion.id);
    if (idAlreadyExists != -1) {
      delete this.questions[idAlreadyExists];
      this.questions = this.questions.filter(q => q != null);
    }
  }

}
