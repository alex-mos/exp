import { useState, useEffect, ReactNode } from "react"

interface DataFetcherProps {
  url: string
  children: (loading, data) => ReactNode
}

export function DataFetcher (props: DataFetcherProps) {
  const [state, setState] = useState({
    loading: false,
    data: null
  })

  function fetchData() {
    setState(prevState => ({...prevState, loading: true}))
    fetch(props.url)
      .then(res => res.json())
      .then(data => setState(prevState => {
        return {
          loading: false,
          data: data
        }
      }))
  }

  useEffect(() => {fetchData()}, [])

  return (
    <div>
      { props.children(state.loading, state.data) }
    </div>
  )
}
