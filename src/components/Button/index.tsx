import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button(props: ButtonProps) {
  const { type = 'button', children, onClick } = props

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}
