/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-26 16:31:54
 * @LastEditTime: 2020-11-26 16:59:42
 * @Description: 在类里使用接口
 */
interface Radio {
  switchRadio(trigger): string;
}
interface Battery {
  checkBatteryStatus (): void;
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus()
}

class Car implements Radio {
  switchRadio(name): string {
    return `${name} 好啊`
  }
}

class Moblephone implements RadioWithBattery {
  switchRadio() {
    return '你好'
  }
  checkBatteryStatus() {
    console.log('cellphone battery')
  }
}
