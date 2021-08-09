interface FetchState {
  data: { value?: string }
  error: string
  isLoading: boolean
}

interface FetchProps {
  url: string
  initOnMount?: boolean
}

export default function useFetchData() {}
