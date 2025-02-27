import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../common/auth/auth.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  data = [
    {
      quizId: 1,
      title: 'Elementary Science Quiz 1',
      description: 'Elementary Science Quiz',
      createdAt: '2025-01-28T14:28:24.1458889',
      quizAttended: ['e38da5e8-72cc-4a0b-8dbe-5757b501288d'],
      questionAnswers: [
        {
          questionText: 'Which planet is called the dwarf planet',
          type: 'MCQ',
          createdAt: '2025-01-28T14:29:44.1009236',
          quizzesId: 1,
          answers: 'Pluto',
          options: ['Earth', 'Pluto', 'Mars', 'Jupiter'],
          userAnswers: ['OnlineQuizBackend.Models.Domain.UserAnswer'],
        },
        {
          questionText:
            'Apart From Earth which planet is Suitable for existance',
          type: 'MCQ',
          createdAt: '2025-01-28T14:33:24.2906909',
          quizzesId: 1,
          answers: 'Mars',
          options: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
          userAnswers: [],
        },
      ],
    },
  ];
  constructor(private auth: AuthService) {}
  getRole() {
    return this.auth.getRole();
  }
}
