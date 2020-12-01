/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 17:25:39
 * @LastEditTime: 2020-12-01 15:22:59
 * @Description: 泛型
 */
function funct1<T>(name: T): T{
  return name
}

const str1: string = 'str'
const name1 = funct1(str1)

// turple里有随意的两个值，希望返回的值是颠倒位置的turple
function reverse<T, U>(turple: [T, U]): [U, T] {
  return [turple[1], turple[0]]
}

const result = reverse(['sss', 444])

function funct3<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

interface isHaveLength {
  length: number
}

function funct4<T extends isHaveLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
console.log(funct4('eeee'))
console.log(funct4([1, 2, 4]))
console.log(funct4({ length: 3 }))

// 类中的泛型：进入队列和出队列
class Queue<T> {
  private data = []
  push(item: T) {
    this.data.push(item)
  }
  pop(): T{
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(22)
console.log(queue.pop().toFixed())

// interface用泛型
interface Inter1<T, U> {
  key: T,
  name: U
}

let inte: Inter1<number, string> = {
  key: 1,
  name: 'h'
}

let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3] // Array是Typescript提供的一个interface


interface A<T> {
  (a: T, b: T): T
}

function a1(a:number, b: number):number {
  return a + b
}

const b1: A<number> = a1
const b2: A<string> = (a: string, b: string):string => {
  return a + b
}

class Queue1<T> {
  private data = []
  push(item:T) {
    return this.data.push(item)
  }
  pop():T {
    return this.data.shift()
  }
}

const queue1 = new Queue1()
const list1 = queue1.push('ss')
queue1.pop()


function plus(a: number, b:number):number {
  return a + b
}
interface Plus<T> {
  (a: T, b: T):T
}
const a: Plus<number> = plus
