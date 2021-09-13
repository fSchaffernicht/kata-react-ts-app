import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '.'

test('renders learn react link', () => {
  render(<Loader />)
  const linkElement = screen.getByText(/text/i)
  expect(linkElement).toBeInTheDocument()
})
