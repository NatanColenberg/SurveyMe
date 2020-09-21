import { type } from "os";

export type Question = {
    index: number,
    Text: string,
    Answers: Answer[]
}

export type Answer = {
    index: number,
    Text: string,
}