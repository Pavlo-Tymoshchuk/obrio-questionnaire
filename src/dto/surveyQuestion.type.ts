export interface SurveyOption {
    label: string
    value: string
    nextQuestionId: string | null,
    replaceValue?: string
}

// Інтерфейс для одного питання
export interface SurveyQuestion {
    id: string
    text: string
    screenType: 'choice'
    options: SurveyOption[],
    prevQuestionId: string | null
}
