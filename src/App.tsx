import useFetchData from './useFetchData'

import { Loader } from './components'

const API = 'https://api.chucknorris.io/jokes'

function App() {
  const categories = useFetchData({
    url: `${API}/categories`,
    initOnMount: true,
  })

  const { data, error, isLoading, refetch } = useFetchData({
    url: `${API}/random`,
    initOnMount: false,
  })

  return (
    <div>
      <Loader isLoading={isLoading} />
      {error && <div>{error}</div>}
      {data && <blockquote>{data?.value}</blockquote>}
      <button onClick={() => refetch()}>get Jokes</button>
      <hr />
      <div>
        {categories.data &&
          categories.data.length > 0 &&
          categories.data.map((category: string) => (
            <button
              onClick={() => refetch(`${API}/random?category=${category}`)}
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  )
}

export default App
