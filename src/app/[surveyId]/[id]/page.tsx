import { notFound } from 'next/navigation'
import { getSurveyConfig, getAllSurveyIds } from '@/utils/getSurveyConfig'

import { SurveyScreen } from './SurveyScreen'
import { Header } from '@/components/Header'
import { PageWrap } from '@/components/PageWrap'

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

export default async function QuestionPage({ params }: QuestionPageProps) {
    const { surveyId, id } = await params

    const surveyConfig = getSurveyConfig(surveyId)

    if (!surveyConfig) return notFound()
    const question = surveyConfig.questions[id]

    if (!question) return notFound()

    return (
        <PageWrap className={question.screenType}>
            <Header prevQuestionId={question.prevQuestionId} surveyId={surveyId} />
            <main className="main-wrapper">
                <SurveyScreen question={question} surveyId={surveyId} />
            </main>
        </PageWrap>
    )
}
