import React from 'react'

interface LoaderProps {
  isLoading: boolean
  children?: React.ReactNode
}

export default function Loader(props: LoaderProps) {
  const { isLoading, children = 'loading ...' } = props

  if (isLoading) return <div>{children}</div>
  return null
}
