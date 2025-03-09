'use client'

import { SurveyOption, SurveyQuestion } from '@/dto/surveyQuestion.type'

import classes from './styles/choiceQuestion.module.scss'

import { usePrepareTitle } from '@/hooks/usePrepareTitle'

import { ChoiceQuestionItem } from './ChoiceQuestionItem'

interface ChoiceQuestionProps {
    question: SurveyQuestion
    surveyId: string
}

export function ChoiceQuestion({ question, surveyId }: ChoiceQuestionProps) {
    const prepareText = usePrepareTitle({ title: question.text, surveyId })

    return (
        <>
            <h1 className="h1-style">{prepareText}</h1>
            {question.options?.length ? (
                <ul className={classes['choice-list']}>
                    {question.options.map((option: SurveyOption) => (
                        <ChoiceQuestionItem
                            key={`choice-${option.value}`}
                            questionId={question.id}
                            questionTitle={prepareText}
                            surveyId={surveyId}
                            option={option}
                        />
                    ))}
                </ul>
            ) : null}
        </>
    )
}
