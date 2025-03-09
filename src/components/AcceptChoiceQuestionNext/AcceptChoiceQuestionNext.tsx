'use client'

import { SurveyOption, SurveyQuestion } from '@/dto/surveyQuestion.type'

import classes from './styles/choiceQuestion.module.scss'

import { usePrepareTitle } from '@/hooks/usePrepareTitle'
import { useEffect } from 'react'


interface AcceptChoiceQuestionNext {
    question: SurveyQuestion
    surveyId: string
}

export function AcceptChoiceQuestionNext({ question, surveyId }: AcceptChoiceQuestionNext) {
    const prepareText = usePrepareTitle({ title: question.text, surveyId })


    useEffect(() => {

    }, [])

    return (
        <>
            <h1 className="h1-style">{prepareText}</h1>

        </>
    )
}
