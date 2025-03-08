import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SurveyState {
    answers: Record<string, Record<string, string>>
    history: Record<string, string[]>
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
    history: loadFromLocalStorage('survey_history') || {},
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
        saveAnswer: (state, action: PayloadAction<{ surveyId: string; questionId: string; answer: string }>) => {
            const { surveyId, questionId, answer } = action.payload

            if (!state.answers[surveyId]) {
                state.answers[surveyId] = {}
            }
            state.answers[surveyId][questionId] = answer

            if (!state.history[surveyId]) {
                state.history[surveyId] = []
            }
            state.history[surveyId].push(questionId)

            saveToLocalStorage('survey_answers', state.answers)
            saveToLocalStorage('survey_history', state.history)
        },

        goBack: (state, action: PayloadAction<{ surveyId: string }>) => {
            const { surveyId } = action.payload
            if (state.history[surveyId]?.length > 1) {
                state.history[surveyId].pop()
                saveToLocalStorage('survey_history', state.history)
            }
        },

        resetSurvey: (state, action: PayloadAction<{ surveyId: string }>) => {
            const { surveyId } = action.payload
            delete state.answers[surveyId]
            delete state.history[surveyId]

            saveToLocalStorage('survey_answers', state.answers)
            saveToLocalStorage('survey_history', state.history)
        },

        clearLocalStorage: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('survey_answers')
                localStorage.removeItem('survey_history')
            }
        },
    },
})

export const { saveAnswer, goBack, resetSurvey, clearLocalStorage } = surveySlice.actions
export default surveySlice.reducer
