import { useState, useEffect, useCallback } from "react"

interface FetchState {
  data: any
  error: string
  isLoading: boolean
}

interface FetchProps {
  url: string
  initOnMount?: boolean
}

export default function useFetchData({ url, initOnMount = true }: FetchProps) {
  const [{ data, error, isLoading }, setState] = useState<FetchState>({
    data: {},
    error: "",
    isLoading: false,
  })

  const fetchData = useCallback(async (newUrl?: string) => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true, error: "" }))

      const response = await fetch(newUrl ?? url)
      const result = await response.json()

      setState({ data: result, error: "", isLoading: false })
    } catch (error) {
      setState({ data: {}, error: "Something went wrong!", isLoading: false })
    }
  }, [url])

  useEffect(() => {
    if (initOnMount) {
      fetchData()
    }
  }, [initOnMount, fetchData])

  return {
    data,
    error,
    isLoading,
    refetch: fetchData,
  }
}
