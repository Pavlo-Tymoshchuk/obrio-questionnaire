'use client'

import { useEffect } from 'react'

import { useAppSelector } from '@/store/Store'

import classes from './styles/results.module.scss'

import { clearLocalStorage } from '@/helpers/localStorage'

import { nameLocalStorage } from '@/store/reducers/survey'

interface ResultScreenProps {
    surveyId: string
}

export function ResultScreen({ surveyId }: ResultScreenProps) {
    const answers = useAppSelector((state) => state.survey.answers[surveyId])

    useEffect(() => {
        clearLocalStorage(nameLocalStorage)
    }, [])

    if (answers && Object.entries(answers).length) {
        return (
            <ul className={classes['result-list']}>
                {Object.entries(answers).map(([questionId, answer]) => (
                    <li className={classes['result-item']} key={`result-${questionId}`}>
                        <p>
                            {answer.questionTitle}
                            <br />
                            <br />
                            <strong>{answer.title}</strong>
                        </p>
                    </li>
                ))}
            </ul>
        )
    }

    return <p>Opps... You did not answer any questions.</p>
}
