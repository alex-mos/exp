(function() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const fieldWidth = 500
  const fieldHeigth = 500
  const gridStep = 10

  function drawField() {
    ctx.beginPath()
    for (let i = gridStep; i < fieldWidth; i += gridStep) {
      ctx.moveTo(i, 0)
      ctx.lineTo(i, fieldHeigth)
    }
    for (let i = gridStep; i < fieldHeigth; i += gridStep) {
      ctx.moveTo(0, i)
      ctx.lineTo(fieldWidth, i)
    }
    ctx.strokeStyle = '#ccc'
    ctx.stroke()
    ctx.closePath()
  }


  function Apple() {
    this._position = []

    this.draw = () => {
      ctx.fillStyle = 'green'
      ctx.fillRect(this.getPosition()[0] * gridStep + 2, this.getPosition()[1] * gridStep + 2, gridStep - 4, gridStep - 4)
    }

    this.setPosition = () => {
      this._position[0] = Math.floor(Math.random() / gridStep * fieldWidth - 1) + 1
      this._position[1] = Math.floor(Math.random() / gridStep * fieldHeigth - 1) + 1
    }

    this.getPosition = () => {
      if (!this._position.length) {
        this.setPosition()
      }
      return this._position
    }
  }
  let apple = new Apple()


  function Snake(body, direction, color) {
    this.body = body
    this.head = body[body.length - 1]
    this.color = color
    this.direction = direction
    this.afterTail = null

    this.draw = function() {
      switch(this.direction) {
        case 'right':
          this.body.push([this.head[0] + 1, this.head[1]])
          this.afterTail = this.body.shift()
          break
        case 'up':
          this.body.push([this.head[0], this.head[1] - 1])
          this.afterTail = this.body.shift()
          break
        case 'left':
          this.body.push([this.head[0] - 1, this.head[1]])
          this.afterTail = this.body.shift()
          break
        case 'down':
          this.body.push([this.head[0], this.head[1] + 1])
          this.afterTail = this.body.shift()
          break
      }

      this.head = body[body.length - 1]

      this.body.forEach(point => {
        ctx.fillStyle = this.color
        ctx.fillRect(point[0] * gridStep + 2, point[1] * gridStep + 2, gridStep - 4, gridStep - 4)
      })

      ctx.fillStyle = 'white'
      if (this.afterTail) {
        ctx.fillRect(this.afterTail[0] * gridStep + 2, this.afterTail[1] * gridStep + 2, gridStep - 4, gridStep - 4)
      }
    }

    this.isEat = () => this.head[0] === apple.getPosition()[0] && this.head[1] === apple.getPosition()[1]

    this.moveLeft = () => {
      if (this.direction !== 'right') {
        this.direction = 'left'
      }
    }
    this.moveUp = () => {
      if (this.direction !== 'down') {
        this.direction = 'up'
      }
    }
    this.moveRight = () => {
      if (this.direction !== 'left') {
        this.direction = 'right'
      }
    }
    this.moveDown = () => {
      if (this.direction !== 'up') {
        this.direction = 'down'
      }
    }
  }
  const snake = new Snake(body = [[1, 1], [2, 1], [3, 1]], direction = null, color = 'black')
  const snake2 = new Snake(body = [[48, 48], [47, 48], [46, 48]], direction = null, color = 'red')
  

  drawField()
  apple.draw()
  function mainLoop() {
    snake.draw()
    snake2.draw()
    if (snake.isEat()) {
      apple.setPosition()
      apple.draw()
    }
  }
  mainLoop()
  setInterval(mainLoop, 100)


  function keyboardEventsHandling() {
    document.onkeydown = handle
    function handle(e) {
      switch (e.keyCode) {
        case 37: // left
          snake.moveLeft()
          break
        case 38: // up
          snake.moveUp()
          break
        case 39: // right
          snake.moveRight()
          break
        case 40: // down
          snake.moveDown()
          break

        case 65: // left
          snake2.moveLeft()
          break
        case 87: // up
          snake2.moveUp()
          break
        case 68: // right
          snake2.moveRight()
          break
        case 83: // down
          snake2.moveDown()
          break
      }
    }
  }
  keyboardEventsHandling()
})()
