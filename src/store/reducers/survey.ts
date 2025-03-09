import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AnswerData {
    value: string,
    replaceValue?: string
}

interface SurveyState {
    answers: Record<string, Record<string, AnswerData>>
}

const loadFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    }
    return null
}

const initialState: SurveyState = {
    answers: loadFromLocalStorage('survey_answers') || {},
}

const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        saveAnswer: (state, action: PayloadAction<{ surveyId: string; questionId: string; answerData: AnswerData }>) => {
            const { surveyId, questionId, answerData } = action.payload

            if (!state.answers[surveyId]) {
                state.answers[surveyId] = {}
            }
            state.answers[surveyId][questionId] = answerData

            saveToLocalStorage('survey_answers', state.answers)
        },

        resetSurvey: (state, action: PayloadAction<{ surveyId: string }>) => {
            const { surveyId } = action.payload
            delete state.answers[surveyId]

            saveToLocalStorage('survey_answers', state.answers)
        },

        clearLocalStorage: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('survey_answers')
            }
        },
    },
})

export const { saveAnswer, resetSurvey, clearLocalStorage } = surveySlice.actions
export default surveySlice.reducer
