import { useAppDispatch } from '@/store/Store'
import { useRouter } from 'next/navigation'

import { saveAnswer } from '@/store/reducers/survey'

import { SurveyOption } from '@/dto/surveyQuestion.type'

interface HandleAnswerProps {
    questionId: string
    surveyId: string,
    questionTitle: string
}

export const useHandleAnswer = ({ questionId, surveyId, questionTitle }: HandleAnswerProps) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    return (answerData: SurveyOption) => {
        dispatch(
            saveAnswer({
                questionId,
                answerData: {
                    value: answerData.value,
                    replaceValue: answerData.replaceValue,
                    title: answerData.label,
                    questionTitle
                },
                surveyId,
            })
        )

        if (answerData.nextQuestionId) {
            router.push(`/${surveyId}/${answerData.nextQuestionId}`)
        } else {
            router.push(`/${surveyId}/results`)
        }
    }
}
