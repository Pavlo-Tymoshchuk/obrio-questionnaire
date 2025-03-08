import { notFound } from 'next/navigation'
import { getSurveyConfig, getAllSurveyIds } from '@/utils/getSurveyConfig'

import ChoiceQuestion from '@/components/ChoiceQuestion'

export function generateStaticParams() {
    const surveyIds = getAllSurveyIds()

    return surveyIds.map((surveyId) => {
        const surveyConfig = getSurveyConfig(surveyId)
        if (!surveyConfig) return []

        return Object.keys(surveyConfig.questions).map((questionId) => ({
            surveyId,
            id: questionId,
        }))
    })
}

interface QuestionPageProps {
    params: { surveyId: string; id: string }
}

export default function QuestionPage({ params }: QuestionPageProps) {
    const surveyConfig = getSurveyConfig(params.surveyId)

    if (!surveyConfig) return notFound()
    const question = surveyConfig.questions[params.id]

    if (!question) return notFound()

    return <ChoiceQuestion question={question} surveyId={params.surveyId} />
}
