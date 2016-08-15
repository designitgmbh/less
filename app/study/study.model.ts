import {
    Module,
    Questionnaire
} from '../module';

const modules = {
    Module,
    Questionnaire
};

export class Study {
    private name: string;
    private comment: string;
    private modules: Module[] = [];

    get id() {
        return this.name;
    }

    get completed() {
        return this.modules.every(module => module.passed);
    }

    public addQuestion(module) {
        this.modules.push(module);
    }

    public send() {
        console.log(JSON.stringify(this));
    }

    static fromJSON(data: any) {
        let study: Study = new Study();
        study.name = data.name;
        study.comment = data.comment;

        for(let module of data.modules) {
            study.addQuestion(modules[module.type].fromJSON(module));
        }

        return study;        
    }
}