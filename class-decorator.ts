/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 16:08:49
 * @LastEditTime: 2020-11-26 16:23:53
 * @Description: class的修饰符
 */
class Animals {
  protected name: string
  static shape: [string, number] = ['bird', 20]
  constructor(name) {
    this.name = name
  }
  run() {
    return `${this.name}跑啊跑`
  }
}
console.log(Animals.shape)

const dog1 = new Animals('小狗')
console.log(dog1.run())

class Dog1 extends Animals {
  barking() {
    return `${this.name} 叫啊叫`
  }
}

class Dog2 extends Animals {
  bark() {
    return `${this.name} 哈哈哈`
  }
}

console.log(new Dog2('卷毛').bark())
