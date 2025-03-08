export interface SurveyOption {
    label: string
    value: string
    nextQuestionId: string | null
}

// Інтерфейс для одного питання
export interface SurveyQuestion {
    id: string
    text: string
    screenType: 'choice'
    options: SurveyOption[]
}
