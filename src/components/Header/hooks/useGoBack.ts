import { useRouter } from 'next/navigation'

import { InnerProps } from '../dto/innerProps.type'

export const useGoBack = ({ prevQuestionId, surveyId }: InnerProps) => {
    const router = useRouter()

    return () => {
        router.push(`/${surveyId}/${prevQuestionId}`)
    }
}