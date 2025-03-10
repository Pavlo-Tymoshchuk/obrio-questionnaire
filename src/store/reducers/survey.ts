import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AnswerData, SurveyState } from '@/dto/surveyStore.type'

import { loadFromLocalStorage, saveToLocalStorage } from '@/helpers/localStorage'

export const nameLocalStorage = 'survey_answers'

const initialState: SurveyState = {
    answers: loadFromLocalStorage(nameLocalStorage) || {},
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

            saveToLocalStorage(nameLocalStorage, state.answers)
        },
    },
})

export const { saveAnswer } = surveySlice.actions
export default surveySlice.reducer
