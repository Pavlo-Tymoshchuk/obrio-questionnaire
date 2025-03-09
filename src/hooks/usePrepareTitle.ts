import { useAppSelector } from '@/store/Store'
import { useEffect, useState } from 'react'

interface PrepareTitleProps {
    title: string
    surveyId: string
}

export const usePrepareTitle = ({ title, surveyId }: PrepareTitleProps) => {
    // Цей стейт введений навмисно, що прибрати проблему гідрації на сервер та клієнті
    const [localTitle, setLocalTitle] = useState('')

    const answers = useAppSelector((state) => state.survey.answers)

    useEffect(() => {
        if (answers[surveyId]) {
            const updatedTitle = title.replace(/{(.*?)}/g, (_, key) => answers[surveyId][key]?.replaceValue || '')
            setLocalTitle(updatedTitle)
        } else {
            setLocalTitle(title)
        }
    }, [answers, surveyId, title])

    return localTitle
}
