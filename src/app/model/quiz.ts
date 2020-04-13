import { Question } from './question';


export interface Quiz {
    id: number;
    catID: number;
    name: string;
    questions: Question[];
}


