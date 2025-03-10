'use client'

import { SurveyQuestion } from '@/dto/surveyQuestion.type'

import { usePrepareTitle } from '@/hooks/usePrepareTitle'
import { useHandleNextAnswer } from '@/hooks/useHandleNextAnswer'
import { useEffect } from 'react'

import { Button } from '@/ui/Button'

interface AcceptChoiceQuestionNext {
    question: SurveyQuestion
    surveyId: string
}

export function AcceptChoiceQuestionNext({ question, surveyId }: AcceptChoiceQuestionNext) {
    const prepareText = usePrepareTitle({ title: question.text, surveyId })
    const handlerAnswer = useHandleNextAnswer({ prevQuestionId: question.prevQuestionId, surveyId, variansNext: question.variansNext })

    useEffect(() => {}, [])

    return (
        <>
            <h1 className="h1-style mb-20">{prepareText}</h1>
            <p className="sub-text">{question.subText}</p>
            <Button type="light" onClick={handlerAnswer}>
                Next
            </Button>
        </>
    )
}
