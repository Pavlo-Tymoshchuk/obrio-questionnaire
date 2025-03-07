import { notFound, redirect } from 'next/navigation'
import { getSurveyConfig, getAllSurveyIds } from '@/utils/getSurveyConfig'

export function generateStaticParams() {
    const surveyIds = getAllSurveyIds()

    return surveyIds.flatMap((surveyId) => {
        const surveyConfig = getSurveyConfig(surveyId)
        if (!surveyConfig) return []

        return Object.keys(surveyConfig.questions).map((questionId) => ({
            surveyId,
            id: questionId,
        }))
    })
}

export default function QuestionPage({ params }: { params: { surveyId: string; id: string } }) {
    const surveyConfig = getSurveyConfig(params.surveyId)

    if (!surveyConfig) return notFound()
    const question = surveyConfig.questions[params.id]

    if (!question) return notFound()

    return (
        <>
            <h2>{question.text}</h2>
        </>
    )
}
