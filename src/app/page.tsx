import { redirect } from 'next/navigation'
import { getSurveyConfig, getAllSurveyIds } from '@/utils/getSurveyConfig'

import { PageWrap } from '@/components/PageWrap'
import { Header } from '@/components/Header'

export default function Home() {
    const surveyIds = getAllSurveyIds()
    const surveyConfig = getSurveyConfig(surveyIds[0])
    const firstQuestionId = surveyConfig ? Object.keys(surveyConfig.questions)[0] : null

    const renderMessage = (message: string) => (
        <PageWrap>
            <Header prevQuestionId={null} surveyId={null} />
            <h1 className="h1-style">{message}</h1>
        </PageWrap>
    )

    if (!surveyConfig) return renderMessage('No surveys available')
    if (!firstQuestionId) return renderMessage('No questions available')

    redirect(`/${surveyIds[0]}/${firstQuestionId}`)
}
