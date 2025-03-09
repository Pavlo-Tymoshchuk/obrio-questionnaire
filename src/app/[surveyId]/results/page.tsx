import { ResultScreen } from './ResultScreen'
import { Header } from '@/components/Header'
import { PageWrap } from '@/components/PageWrap'

interface ResultsPageProps {
    params: {
        surveyId: string
    }
}

export default async function ResultsPage({ params }: ResultsPageProps) {
    const { surveyId } = await params

    return (
        <PageWrap>
            <Header prevQuestionId={null} surveyId={surveyId} />
            <main className="main-wrapper">
                <h1 className="h1-style">Survey Results</h1>

                <ResultScreen surveyId={surveyId} />
            </main>
        </PageWrap>
    )
}
