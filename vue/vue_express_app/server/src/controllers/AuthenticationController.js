const {User} = require('../models')

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
  }
}
