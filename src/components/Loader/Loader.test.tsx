import { render, screen } from '@testing-library/react'
import Loader from '.'

describe('Should render', () => {
  test('loader', () => {
    const { container } = render(<Loader isLoading />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('with default text "loading ..."', () => {
    render(<Loader isLoading />)
    const customText = screen.getByText('loading ...')
    expect(customText).toBeInTheDocument()
  })

  test('with custom text "test loading"', () => {
    render(<Loader isLoading>test loading</Loader>)
    const customText = screen.getByText('test loading')
    expect(customText).toBeInTheDocument()
  })
})

describe('Should not render', () => {
  test('loader', () => {
    const { container } = render(<Loader isLoading={false} />)
    expect(container.firstChild).toBeNull()
  })
})
