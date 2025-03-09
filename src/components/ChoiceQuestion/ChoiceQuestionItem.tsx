'use client'

import { useAppSelector } from '@/store/Store'
import { SurveyOption } from '@/dto/surveyQuestion.type'

import { useHandleAnswer } from './hooks/useHandleAnswer'

import { isWasAnswer } from './helpers/functions'

import { Button } from '@/ui/Button'
import { useEffect, useState } from 'react'

interface ChoiceQuestionPropsItem {
    questionId: string
    surveyId: string
    questionTitle: string
    option: SurveyOption
}

export function ChoiceQuestionItem({ questionId, surveyId, option, questionTitle }: ChoiceQuestionPropsItem) {
    const [isTypeBtn, setTypeBtn] = useState<'primary' | 'accent'>('primary')
    const answers = useAppSelector((state) => state.survey.answers)
    const handleAnswer = useHandleAnswer({ questionId, surveyId, questionTitle })
    const isCheckAnswer = isWasAnswer(answers[surveyId]?.[questionId]?.value)

    useEffect(() => {
        const isCheck = isCheckAnswer(option.value)

        if (isCheck) {
            setTypeBtn('accent')
        }
    }, [])
    return (
        <li>
            <Button type={isTypeBtn} onClick={() => handleAnswer(option)}>
                {option.label}
            </Button>
        </li>
    )
}
