import { Module } from '../';
import {
    Question,
    FreetextQuestion,
    BooleanQuestion
} from '../../question'

const questions = {
    BooleanQuestion,
    FreetextQuestion
};

export class Questionnaire extends Module {
    questions: Question[] = [];

    public addQuestion(question: Question) {
        this.questions.push(question);
    }

    static fromJSON(data: any) {
        let questionnaire = new Questionnaire();
        questionnaire.name = data.name;

        for(let question of data.questions) {
            questionnaire.addQuestion(questions[question.type].fromJSON(question));
        }
         
        return questionnaire;   
    }
}