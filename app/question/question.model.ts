export class Question {
    name: string;
    question: string;
    answer: string;

    get answered() {
        return !!this.answer;
    }

    protected parse(data: any) {
        this.name = data.name;
        this.question = data.question;
    }

    static fromJSON(data: any) {
        let question = new this();
        question.parse(data);

        return question;
    }
}