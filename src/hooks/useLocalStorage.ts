import { useState } from 'react'

type LocalStorageSetValue = string
type LocalStorageReturnValue = LocalStorageSetValue | null

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void
        removeItem: () => void
    }
]

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState()

    const setItem = (newValue: LocalStorageSetValue) => {
        try {
            window.localStorage.setItem(key, newValue)
            setValue(newValue)
        } catch (error) {
            console.log(error.message)
        }
    }

    const removeItem = () => {
        try {
            window.localStorage.removeItem(key)
            setValue(null)
        } catch (error) {
            console.log(error.message)
        }
    }

    return [value, { setItem, removeItem }]
}