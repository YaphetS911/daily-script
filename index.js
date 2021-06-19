/**
 * Author: Yaphets911
 * Email: shengchensb@gmail.com
 * Created Date: Sunday, June 20th 2021, 12:53:08 am
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Yaphets911
 *
 * Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.
 * Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.
 */

import taskList from './task-list.js'

for (let taskName of taskList) {
  console.log('----------👇👇👇👇👇👇👇👇👇👇----------')
  console.log('start to excutor task: ' + taskName)
  try {
    const filePath = './task/' + taskName + '.js'
    const taskInfo = await import(filePath)
    if (Object.keys(taskInfo).length > 0) {
      if (taskInfo.success) {
        console.log('task excute success, result: ' + JSON.stringify(taskInfo.result))
      } else {
        console.error('task excute failed: ' + taskInfo.message)
      }
    }
  } catch (e) {
    console.error('ERROR when excute task: ' + taskName)
    console.error(e)
  }

  console.log('task has been finished: ' + taskName)
  console.log('----------👆👆👆👆👆👆👆👆👆👆----------')
}
