import { render, screen, fireEvent } from '@testing-library/react'
import Button from './'

describe('Should render', () => {
  test('button', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('with text "My Button"', () => {
    render(<Button>My Button</Button>)
    const customText = screen.getByText('My Button')
    expect(customText).toBeInTheDocument()
  })

  test('with type "button"', () => {
    render(<Button>My Button</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('type', 'button')
  })
})

describe('Fires event', () => {
  test('click', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
