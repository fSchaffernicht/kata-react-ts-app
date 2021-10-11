import useFetchData from './useFetchData'

import { Loader, Button } from './components'

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
      <Button onClick={() => refetch()}>get Jokes</Button>
      <hr />
      <div>
        {categories.data &&
          categories.data.length > 0 &&
          categories.data.map((category: string) => (
            <Button
              onClick={() => refetch(`${API}/random?category=${category}`)}
            >
              {category}
            </Button>
          ))}
      </div>
    </div>
  )
}

export default App
