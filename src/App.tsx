import { useReducer, useEffect } from "react"

import reducer, { initialState } from "./reducer"

function App() {
  const [{ data, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  )

  async function getData() {
    try {
      dispatch({ type: "fetch-data" })

      const response = await fetch("https://api.chucknorris.io/jokes/random")
      const result = await response.json()

      dispatch({ type: "fetch-data-success", payload: result })
    } catch (error) {
      dispatch({ type: "fetch-data-fail", payload: error })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function handleClick() {
    getData()
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>loading...</div>}
      {data && <blockquote>{data.value}</blockquote>}
      <button onClick={handleClick}>get more</button>
    </div>
  )
}

export default App
