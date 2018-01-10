import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

/* example
  AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '12345'
  })
 */
