'use client'

import { SurveyOption, SurveyQuestion } from '@/dto/surveyQuestion.type'

import { useHandleAnswer } from './hooks/useHandleAnswer'
import { usePrepareTitle } from './hooks/usePrepareTitle'

import { Button } from '@/app/ui/Button'

interface ChoiceQuestionProps {
    question: SurveyQuestion
    surveyId: string
}

export function ChoiceQuestion({ question, surveyId }: ChoiceQuestionProps) {
    const handleAnswer = useHandleAnswer({ questionId: question.id, surveyId })
    const prepareText = usePrepareTitle({ title: question.text, surveyId })

    return (
        <>
            <h1 className='h1-style'>{prepareText}</h1>
            {question.options.map((option: SurveyOption) => (
                <button key={option.value} onClick={() => handleAnswer(option)}>
                    {option.label}
                </button>
            ))}
        </>
    )
}
