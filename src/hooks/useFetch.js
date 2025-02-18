import { useState, useEffect, useCallback } from 'react';

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const getData = useCallback(async (params = {}) => {
        setIsLoading(true)
        setError("")
        try {
            const r = await fetch(url)
            const data = await r.json()

            if (params.hasOwnProperty("_limit")) {
                setData(data.slice(0, params._limit))
            } else {
                setData(data)
            }

        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }, [url])

    useEffect(() => {
        getData()
    }, [getData])

    const refetch = useCallback(({ params }) => {
        getData(params)
    }, [getData])

    return { data, isLoading, error, refetch };
}