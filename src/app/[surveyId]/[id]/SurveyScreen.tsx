import { ChoiceQuestion } from '@/components/ChoiceQuestion'
import { AcceptChoiceQuestionNext } from '@/components/AcceptChoiceQuestionNext'

import { SurveyQuestion } from '@/dto/surveyQuestion.type'

interface SurveyScreenProps {
    question: SurveyQuestion
    surveyId: string
}

export function SurveyScreen({ question, surveyId }: SurveyScreenProps) {
    switch (question.screenType) {
        case 'choice':
            return <ChoiceQuestion question={question} surveyId={surveyId} />
        case 'accept-next':
            return <AcceptChoiceQuestionNext question={question} surveyId={surveyId} />
        default:
            return null
    }
}
