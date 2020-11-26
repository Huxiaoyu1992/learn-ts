/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 15:18:54
 * @LastEditTime: 2020-11-26 15:30:00
 * @Description: 函数和类型推断
 */

 // 函数声明写法
function func1 (x: number, y: number, z?:number): number {
  return x + y
}

func1(2, 4)
func1(2, 4, 444)

function func2(x: number, y: number, z:number = 3): number {
  return x + y + z
}
func2(12, 33)

// 函数表达式
let func3 = function(x: number, y: number, z:number = 3): number {
  return x + y + z
}

const func4: (x: number, y: number, z?: number) => number = func3 
