'use client'

import { useAppSelector } from '@/store/Store'

import classes from './styles/results.module.scss'

interface ResultScreenProps {
    surveyId: string
}

export function ResultScreen({ surveyId }: ResultScreenProps) {
    const answers = useAppSelector((state) => state.survey.answers[surveyId])

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
