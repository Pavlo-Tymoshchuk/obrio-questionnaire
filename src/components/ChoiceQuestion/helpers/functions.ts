export const isWasAnswer = (answersValue: string | undefined) => {
    return (value: string) => {
        if (answersValue === value) {
            return true
        }

        return false
    }
}
