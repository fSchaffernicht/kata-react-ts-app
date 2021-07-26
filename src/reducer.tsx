export const initialState = {
  isLoading: false,
  data: {},
  error: "",
}

export default function reducer(
  state: any,
  { type, payload }: { type: string; payload?: any }
) {
  switch (type) {
    case "fetch-data": {
      return {
        ...state,
        isLoading: true,
      }
    }

    case "fetch-data-success": {
      const { value } = payload
      return {
        ...state,
        isLoading: false,
        data: { value },
      }
    }

    case "fetch-data-fail": {
      return {
        ...state,
        isLoading: false,
        error: payload,
        data: {},
      }
    }

    default: {
      return state
    }
  }
}
