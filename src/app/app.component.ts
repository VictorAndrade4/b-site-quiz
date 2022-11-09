import { Component } from '@angular/core';
import getQuestions from './data/questions.data';
import Question from './models/question';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private questionService: QuestionService) { }

  questions = getQuestions();

  isLastQuestion(i: number) {
    return i == this.questions.length - 1;
  }

  clickSend() {
    const answers = this.questionService.getQuestions().map(
      (question, index) => `${index + 1}) ${question.text} - ${question.chosen}`
    ).join("\n");

    const text = `Oi Victor, você é lamentável, porém aqui estão as respostas: \n\n${answers}`;
    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/5531982862020?text=${encodedText}`;
    window.location.href = whatsappLink;
  }

}
