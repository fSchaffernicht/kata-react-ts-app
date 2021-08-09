import useFetchData from "./useFetchData"

function App() {
  const { data, error, isLoading, refetch } = useFetchData({
    url: "https://api.chucknorris.io/jokes/random",
    initOnMount: false,
  })

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>loading...</div>}
      {data && <blockquote>{data.value}</blockquote>}
      <button onClick={() => refetch()}>get Jokes</button>
    </div>
  )
}

export default App
