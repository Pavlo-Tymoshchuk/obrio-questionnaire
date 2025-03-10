export interface SurveyOption {
    label: string
    value: string
    nextQuestionId: string | null
    replaceValue?: string
}

interface VariantsNext {
    [key: string]: string; 
  }

// Інтерфейс для одного питання
export interface SurveyQuestion {
    id: string
    text: string
    subText?: string
    screenType: 'choice' | 'accept-next'
    options: SurveyOption[]
    prevQuestionId: string | null,
    variansNext?: VariantsNext
}
