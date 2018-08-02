const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      if (err.message === 'Validation error') {
        err.message = 'This email already in use.'
      }
      res.status(400).send({
        error: err.message
      })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (user) {
        if (isPasswordValid(password)) {
          res.status(200).send({
            user: user.toJSON()
          })
        } else {
          res.status(403).send({
            error: 'Incorrect password'
          })
        }
      } else {
        res.status(403).send({
          error: 'User is not found'
        })
      }



      function isPasswordValid (pass) {
        return password === user.password
      }
    } catch(e) {
      console.error(e)
    }
  }
}
