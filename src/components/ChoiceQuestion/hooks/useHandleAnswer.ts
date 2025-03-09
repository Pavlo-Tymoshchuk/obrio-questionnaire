import { useAppDispatch } from '@/store/Store'
import { useRouter } from 'next/navigation'

import { saveAnswer } from '@/store/reducers/survey'

import { SurveyOption } from '@/dto/surveyQuestion.type'

interface HandleAnswerProps {
    questionId: string
    surveyId: string
}

export const useHandleAnswer = ({ questionId, surveyId }: HandleAnswerProps) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    return (answerData: SurveyOption) => {
        dispatch(
            saveAnswer({
                questionId,
                answerData: {
                    value: answerData.value,
                    replaceValue: answerData.replaceValue,
                },
                surveyId,
            })
        )

        if (answerData.nextQuestionId) {
            router.push(`/${surveyId}/${answerData.nextQuestionId}`)
        } else {
            router.push('/results')
        }
    }
}
