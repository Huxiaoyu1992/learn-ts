/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 11:33:53
 * @LastEditTime: 2020-11-26 14:53:14
 * @Description: 允许赋值为任意类型: 用于不知道类型的数据
 */
// 尽量少用any，因为会丧失使用类型检查的优势
let data: any = 23234
data = 'zhangsan'
data.setAge()
console.log(data.name)

// 联合类型
let unionType: string | number | boolean = '张三'
unionType = 2323
unionType = false
// unionType = []
