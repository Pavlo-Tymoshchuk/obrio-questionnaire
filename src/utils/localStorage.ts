export const loadFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    }
    return null
}

export const clearLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key)
    }
}


export const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}