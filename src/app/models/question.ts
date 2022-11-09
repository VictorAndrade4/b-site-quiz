import Alternative from './alternative';

export default interface Question {
    id: number;
    image: string;
    text: string;
    alternatives: Alternative[];
    showSongs: boolean;
}

export interface QuestionDto {
    id: number;
    text: string;
    chosen: string;
}