/*
  Реализуйте класс Singleton, который будет создавать экзепляр только при первом вызове.
  При последующих вызовах он должен возвращать уже созданный экземпляр.
*/

export class Singleton {
  instance = null

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this
    } else {
      return Singleton.instance
    }
  }
}
