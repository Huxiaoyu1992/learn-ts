/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-01 15:23:11
 * @LastEditTime: 2020-12-01 16:04:05
 * @Description: 类型别名和类型推断
 */
function sum(x: number, y: number):number {
  return x + y
}
// sum2和sum类型相等第一种写法
const sum2: (x:number, y:number) => number = sum
// sum2和sum类型相等的第二种写法
type sumType = (x:number, y:number) => number
const sum3:sumType = sum

// 联合类型的类型别名
type type1 = () => string
type type2 = string | type1
function func4(n: type2): string {
  if (typeof n === 'string') {
    return n
  }
  return n()
}

// 类型断言: 就是联合类型里， 假设他是某种类型的数据，但是他不能假设成该联合类型里不存在的类型
function getLength(input: string | number):number {
  const str = input as String
  if (str.length) {
    return str.length
  } else {
    const number = input as Number
    return number.toString().length
  }
}

function getLength1(input: string | number):number {
  if ((<string>input).length) return (<string>input).length
  return input.toString().length
}