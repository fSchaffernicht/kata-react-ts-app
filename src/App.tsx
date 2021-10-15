import useFetchData from "./useFetchData";

import { Loader, Button, Table } from "./components";

const API = "https://api.chucknorris.io/jokes";

function App() {
  const categories = useFetchData({
    url: `${API}/categories`,
    initOnMount: true,
  });

  const { data, error, isLoading, refetch } = useFetchData({
    url: `${API}/random`,
    initOnMount: false,
  });

  const config = [
    {
      field: "a",
      title: "render a",
      cellRenderer: (value: number | string) => {
        return <strong>{value}</strong>;
      },
      getCellClass: (value: number | string) => {
        if (String(value).includes("a1")) return "test-class";
        return "";
      },
    },
    {
      field: "b",
      title: "render b",
    },
    {
      field: "c",
      title: "render c",
    },
  ];

  const tableData = [
    {
      c: "cell c1",
      a: null,
      b: 33,
    },
    {
      a: "cell a2",
      b: 234,
      c: null,
      d: "cell d2",
    },
    {
      a: "cell a3",
      b: "cell b3",
      c: "cell c3",
      d: "cell d3",
    },
  ];

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
      <div>
        <Table configuration={config} data={tableData} />
      </div>
    </div>
  );
}

export default App;
