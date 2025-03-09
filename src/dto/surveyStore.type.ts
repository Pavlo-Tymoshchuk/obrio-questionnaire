export interface AnswerData {
    title: string
    value: string
    replaceValue?: string
    questionTitle: string
}

export interface SurveyState {
    answers: Record<string, Record<string, AnswerData>>
}
