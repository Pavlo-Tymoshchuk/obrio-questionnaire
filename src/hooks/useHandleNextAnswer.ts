import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store/Store'
import { useRouter } from 'next/navigation'

import { SurveyQuestion } from '@/dto/surveyQuestion.type'

interface HandleNextAnswerProps {
    prevQuestionId: SurveyQuestion['prevQuestionId']
    surveyId: string
    variansNext: SurveyQuestion['variansNext']
}

export const useHandleNextAnswer = ({ prevQuestionId, surveyId, variansNext }: HandleNextAnswerProps) => {
    const answer = useAppSelector((state) => {
        if (prevQuestionId && state.survey.answers[surveyId] && state.survey.answers[surveyId][prevQuestionId]) {
            return state.survey.answers[surveyId][prevQuestionId]
        }

        return
    }, shallowEqual)

    const router = useRouter()

    return () => {
        if (answer && variansNext) {
            const nextQuestionId = variansNext[answer.value]

            if (nextQuestionId) {
                router.push(`/${surveyId}/${nextQuestionId}`)
            } else {
                router.push(`/${surveyId}/results`)
            }
        }
    }
}
