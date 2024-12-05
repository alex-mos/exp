import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Минимальная страница</title>
    </head>
    <body>
      <!-- have a button POST a click via AJAX -->
      <button hx-post="clicked" hx-target="#result">Загрузить данные</button>
      <div id="result"></div>
    </body>

    <script src="https://unpkg.com/htmx.org@2.0.3"></script>
    </html>
    `
  )
})

app.post('/clicked', (c) => {
  return c.html('You clicked <strong>the button</strong>. This is a response from Hono!')
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
