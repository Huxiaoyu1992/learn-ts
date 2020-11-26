/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 15:32:03
 * @LastEditTime: 2020-11-26 16:01:21
 * @Description: class类
 */
// 类：定义了一切事务的抽象特点；
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run () {
    return `${this.name} 正在跑`
  }
}

const dog = new Animal('狗子张')
console.log(dog.run())

// 类的继承
class Pig extends Animal {
  bark() {
    return `${this.name}正在疯狂的叫`
  }
}

const pig1 = new Pig('小猪佩奇')
console.log(pig1.bark())

// 类方法的重写
class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  run () {
    return `${this.name} 汪汪汪` + super.run()
  }
}

const hashiqi = new Dog('我是哈士奇')
console.log(hashiqi.run())