import fs from 'fs'
import path from 'path'

import { SurveyQuestion } from '@/dto/surveyQuestion.type'

interface SurveyConfig {
    questions: Record<string, SurveyQuestion>
}

// Об'єкт, що містить всі опитувальники
const surveys: Record<string, SurveyConfig> = {}

// Отримання всіх опитувальників із конфігу
const configDir = path.join(process.cwd(), './src/config')
const surveyFiles = fs.readdirSync(configDir).filter((file) => file.endsWith('.json'))

surveyFiles.forEach((file) => {
    const surveyId = file.replace('.json', '')
    const filePath = path.join(configDir, file)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    surveys[surveyId] = JSON.parse(fileContents)
})

export function getSurveyConfig(surveyId: string) {
    return surveys[surveyId] || null
}

export function getAllSurveyIds() {
    return Object.keys(surveys)
}
