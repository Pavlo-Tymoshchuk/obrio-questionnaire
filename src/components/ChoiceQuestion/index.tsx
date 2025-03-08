'use client'

import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/store/Store'
import { useDispatch } from 'react-redux'
import { saveAnswer, goBack } from '@/store/reducers/survey'

import { SurveyOption, SurveyQuestion } from '@/dto/surveyQuestion.type'

interface ChoiceQuestionProps {
    question: SurveyQuestion
    surveyId: string
}

export default function ChoiceQuestion({ question, surveyId }: ChoiceQuestionProps) {
    const history = useAppSelector((state) => state.survey.history[surveyId])
    const dispatch = useDispatch()
    const router = useRouter()

    const handleAnswer = (answerData: SurveyOption) => {
        dispatch(saveAnswer({ questionId: question.id, answer: answerData.value, surveyId }))

        if (answerData.nextQuestionId) {
            router.push(`/${surveyId}/${answerData.nextQuestionId}`)
        } else {
            router.push('/results')
        }
    }

    const handleBack = () => {
        if (history && history.length) {
            dispatch(goBack({ surveyId }))
            router.push(`/${surveyId}/${history[history.length - 1]}`)
        }
    }

    

    return (
        <>
            {history && history.length && (
                <button onClick={handleBack} style={{ marginTop: '10px' }}>
                    Back
                </button>
            )}
            <h2>{question.text}</h2>
            {question.options.map((option: SurveyOption) => (
                <button key={option.value} onClick={() => handleAnswer(option)}>
                    {option.label}
                </button>
            ))}
        </>
    )
}
