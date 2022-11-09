import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import Alternative from '../models/alternative';
import Question, { QuestionDto } from '../models/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() question: Question | undefined;
  @Input() position: number = 0;
  @Input() lastQuestion: boolean = false;

  chosen: Alternative | undefined;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  selectionChange(option: MatListOption) {
    this.chosen = option.value;

    this.questionService.addQuestion({
      chosen: this.chosen?.text,
      text: this.question?.text,
      id: this.question?.id
    } as QuestionDto);

    console.info('Selected Answers -> ', this.questionService.getQuestions());
  }

  onNextClick(event: Event) {
    if (this.chosen) {
      this.scrollDownToNextQuiz();
    }
  }

  scrollDownToNextQuiz() {
    document.getElementById(`app-quiz-${this.position + 1}`)?.scrollIntoView();
  }
}
