import { DataFetcher } from "../DataFetcher/index"

export function MovieInfo () {
  return (
    <div>
      <div>MovieInfo</div>
      <DataFetcher url="https://swapi.dev/api/people/2/?format=json">
        {
          function(loading, data) {
            return (
              <div>
                {loading && "loading"}
                {!loading && (
                  <div>
                    <div>данные:</div>
                    <div>{JSON.stringify(data)}</div>
                  </div>
                )}
              </div>
            )
          }
        }
      </DataFetcher>
    </div>
  )
}
