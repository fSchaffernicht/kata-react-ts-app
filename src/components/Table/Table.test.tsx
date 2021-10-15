import { render, screen } from "@testing-library/react";
import Table from "./";

describe("Should render", () => {
  test("table", () => {
    const config = [
      {
        field: "a",
        title: "render a",
        cellRenderer: () => {},
      },
      {
        field: "b",
        title: "render b",
        cellRenderer: () => {},
      },
      {
        field: "c",
        title: "render c",
        cellRenderer: () => {},
      },
    ];

    const data = [
      {
        c: "cell c1",
        a: "cell a1",
        d: "cell d1",
        b: "cell b1",
      },
      {
        a: "cell a2",
        b: "cell b2",
        c: "cell c2",
        d: "cell d2",
      },
      {
        a: "cell a3",
        b: "cell b3",
        c: "cell c3",
        d: "cell d3",
      },
    ];

    const { container } = render(<Table configuration={config} data={data} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  test('table with data "cell a1"', () => {
    const config = [
      {
        field: "a",
        title: "render a",
        cellRenderer: () => {},
      },
      {
        field: "b",
        title: "render b",
        cellRenderer: () => {},
      },
      {
        field: "c",
        title: "render c",
        cellRenderer: () => {},
      },
    ];

    const data = [
      {
        a: "cell a1",
        b: "cell b1",
        c: "cell c1",
        d: "cell d1",
      },
      {
        a: "cell a2",
        b: "cell b2",
        c: "cell c2",
        d: "cell d2",
      },
      {
        a: "cell a3",
        b: "cell b3",
        c: "cell c3",
        d: "cell d3",
      },
    ];

    render(<Table configuration={config} data={data} />);

    const customText = screen.getByText("cell a1");
    expect(customText).toBeInTheDocument();
  });
});
