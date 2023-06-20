export function withPointlessHOC (Component) {
  return function (props) {
    console.log('props')
    console.log(props)
    return (
      <Component {...props} />
    )
  }
}
