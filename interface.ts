/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 15:06:43
 * @LastEditTime: 2020-11-26 16:31:38
 * @Description: 接口
 */
interface Person {
  name: string;
  age: number;
}

let zhangsan: Person = {
  name: '张三',
  age: 22
}

// 有时候希望是可选属性
interface People {
  sex: string;
  age?:number;
}

let lisi: People = {
  sex: '男',
}

// 只读属性
interface Int {
  readonly id: string;
  name: string;
}

const a: Int = {
  id: 'eeeee',
  name: 'zhangsan'
}
// a.id = 'eeeee'